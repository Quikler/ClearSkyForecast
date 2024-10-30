using Backend.DTOs;
using Backend.DTOs.Factories;
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
        var threeDayFiveHour = await _openWeatherService.GetFiveDayThreeHourAsync(ip.Latitude, ip.Longitude, OpenWeatherToken, 10);

        if (ip is null || weather is null || threeDayFiveHour is null) return Problem();

        //var currentTime = DateTimeOffset.FromUnixTimeSeconds(weather.Dt + weather.Timezone).DateTime;
        var currentTime = DateTimeOffset.FromUnixTimeSeconds(weather.Dt);

        var temps = threeDayFiveHour.List
            .Select(item => item.Main!.Temp)
            .ToArray();

        var forecasts = GetTodayForecastsByTimeOfDay(threeDayFiveHour.List, currentTime);

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
                MaxTemp = temps.Max().EvaluateKelvin(),
                MinTemp = temps.Min().EvaluateKelvin(),
                Icon = weather.Weather[0].Icon,
                CurrentTime = currentTime.AddSeconds(weather.Timezone).ToString("yyyy-MM-dd HH:mm"),
            },
            TodayForecast = TodayForecastFactory.FromForecasts(forecasts),
            DetailedWeather = new DetailedWeatherDTO
            {
                FeelsLike = weather.Main.FeelsLike.EvaluateKelvin(),
                Sunrise = DateTimeOffset.FromUnixTimeSeconds(weather.Sys.Sunrise + weather.Timezone).ToString("HH:mm"),
                Sunset = DateTimeOffset.FromUnixTimeSeconds(weather.Sys.Sunset + weather.Timezone).ToString("HH:mm"),
                MaxTemp = temps.Max().EvaluateKelvin(),
                MinTemp = temps.Min().EvaluateKelvin(),
                Humidity = weather.Main.Humidity,
                Pressure = weather.Main.Pressure,
                Visibility = weather.Visibility.ToString(),
                Wind = weather.Wind.Speed,
            },
        };

        return Ok(dto);
    }

    public static Dictionary<string, FiveDayWeatherData[]> GetTodayForecastsByTimeOfDay(IEnumerable<FiveDayWeatherData> data, DateTimeOffset today)
    {
        today = today.Date;

        return data
            .Where(w =>
            {
                var dateTime = DateTimeOffset.FromUnixTimeSeconds(w.DateTime);
                return dateTime.DateTime < today.AddDays(1).AddHours(5);
            })
            .GroupBy(w =>
            {
                var hour = DateTimeOffset.FromUnixTimeSeconds(w.DateTime).Hour;
                return hour switch
                {
                    >= 5 and < 12 => "Morning",
                    >= 12 and < 17 => "Afternoon",
                    >= 17 and < 22 => "Evening",
                    _ => "Night"
                };
            })
            .ToDictionary(g => g.Key, g => g.Select(fdw => fdw).ToArray());
    }
}