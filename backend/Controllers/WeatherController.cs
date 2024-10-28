using System.Numerics;
using Backend.DTOs;
using Backend.JSON.ResponseModels;
using Backend.Services.Interfaces;
using Backend.Utils.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class WeatherController : ControllerBase
{
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IConfiguration _configuration;
    private readonly IOpenWeatherService _openWeatherService;
    private readonly IIpInfoService _ipInfoService;

    public string OpenWeatherToken => _configuration["OPENWEATHER:TOKEN"]!;

    public WeatherController(IHttpClientFactory httpClientFactory, IConfiguration configuration,
        IOpenWeatherService openWeatherService, IIpInfoService ipInfoService)
    {
        _httpClientFactory = httpClientFactory;
        _configuration = configuration;
        _openWeatherService = openWeatherService;
        _ipInfoService = ipInfoService;
    }

    [HttpGet]
    public async Task<IActionResult> Current(float lat, float lon)
    {
        try
        {
            var response = await _openWeatherService.GetCurrentAsync(lat, lon, _configuration["OPENWEATHER:TOKEN"]!);
            return Ok(new { response });
        }
        catch (HttpRequestException ex)
        {
            return Problem("Error fetching weather data: " + ex.Message);
        }
        catch (Exception ex)
        {
            return Problem("An unexpected error occurred: " + ex.Message);
        }
    }

    [HttpGet]
    public async Task<IActionResult> Today()
    {
        var ip = await _ipInfoService.GetIpAsync(_configuration["IPINFO:TOKEN"]!);
        var weather = await _openWeatherService.GetCurrentAsync(ip.Latitude, ip.Longitude, OpenWeatherToken);
        var threeDayFiveHour = await _openWeatherService.GetFiveDayThreeHourAsync(ip.Latitude, ip.Longitude, OpenWeatherToken, 8);

        var morning = threeDayFiveHour.List.Take(2).ToArray();
        var afternoon = threeDayFiveHour.List.Take(new Range(2, 4)).ToArray();
        var evening = threeDayFiveHour.List.Take(new Range(4, 6)).ToArray();
        var night = threeDayFiveHour.List.TakeLast(2).ToArray();

        var todayTemps = threeDayFiveHour.List
            .Select(item => item.Main!.Temp)
            .ToArray();

        var currentTime = DateTime.Now;

        var dto = new TodayWeatherDTO
        {
            TopBar = new TopBarDTO
            {
                City = ip.City,
                Country = ip.Country,
                Region = ip.Region,
                Latitude = ip.Latitude,
                Longitude = ip.Longitude, 
            },
            ShortWheather = new ShortWheatherDTO
            {
                City = ip.City,
                Region = ip.Region,
                CurrentTemp = weather.Main.Temp.EvaluateKelvin(),
                CloudState = weather.Weather[0].Description,
                MaxTemp = weather.Main.TempMax.EvaluateKelvin(),
                MinTemp = weather.Main.TempMin.EvaluateKelvin(),
                Icon = weather.Weather[0].Icon,
            },
            TodayForecast = [
                CreateTodayForecastDTO(morning, "Morning"),
                CreateTodayForecastDTO(afternoon, "Afternoon"),
                CreateTodayForecastDTO(evening, "Evening"),
                CreateTodayForecastDTO(night, "Night"),
                // new TodayForecastDTO
                // {
                //     TimeOfDay = currentTime.GetTimeOfDay(),
                //     Temp = morning.Average(w => w.Main.Temp).EvaluateKelvin(),
                //     Icon = morning[0].Weather[0].Icon,
                //     Precipitation = (int)(morning[0].ProbabilityOfPrecipitation * 100),
                // },
                // new TodayForecastDTO
                // {
                //     TimeOfDay = currentTime.GetTimeOfDay(),
                //     Temp = afternoon.Average(w => w.Main.Temp).EvaluateKelvin(),
                //     Icon = afternoon[0].Weather[0].Icon,
                //     Precipitation = (int)(afternoon[0].ProbabilityOfPrecipitation * 100),
                // },
                // new TodayForecastDTO
                // {
                //     TimeOfDay = currentTime.GetTimeOfDay(),
                //     Temp = evening.Average(w => w.Main.Temp).EvaluateKelvin(),
                //     Icon = evening[0].Weather[0].Icon,
                //     Precipitation = (int)(evening[0].ProbabilityOfPrecipitation * 100),
                // },
                // new TodayForecastDTO
                // {
                //     TimeOfDay = currentTime.GetTimeOfDay(),
                //     Temp = night.Average(w => w.Main.Temp).EvaluateKelvin(),
                //     Icon = night[0].Weather[0].Icon,
                //     Precipitation = (int)(night[0].ProbabilityOfPrecipitation * 100),
                // },
            ],
        };

        return Ok(dto);
    }

    private TodayForecastDTO CreateTodayForecastDTO(WeatherData[] wheatherDatas, string timeOfDay)
    {
        return new TodayForecastDTO
        {
            TimeOfDay = timeOfDay,
            Temp = wheatherDatas.Average(w => w.Main.Temp).EvaluateKelvin(),
            Icon = wheatherDatas.FirstOrDefault()?.Weather?.FirstOrDefault()?.Icon!,
            Precipitation = (int)(wheatherDatas.FirstOrDefault()?.ProbabilityOfPrecipitation * 100 ?? 0),
        };
    }

    private IEnumerable<WeatherData> GetForecastForTimeOfDay(List<WeatherData> forecastItems, string timeOfDay)
    {
        // Логика фильтрации прогнозов в зависимости от времени суток
        return forecastItems.Where(f => IsTimeOfDay(f.DateTimeText, timeOfDay));
    }

    private bool IsTimeOfDay(string dt_txt, string timeOfDay)
    {
        var hour = DateTime.Parse(dt_txt).Hour;
        return (timeOfDay == "Morning" && hour >= 5 && hour < 12) ||
            (timeOfDay == "Afternoon" && hour >= 12 && hour < 17) ||
            (timeOfDay == "Evening" && hour >= 17 && hour < 21) ||
            (timeOfDay == "Night" && (hour >= 21 || hour < 5));
    }
}