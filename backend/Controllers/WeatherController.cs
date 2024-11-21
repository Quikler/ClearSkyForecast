using System.Globalization;
using Backend.DTOs;
using Backend.DTOs.Factories;
using Backend.JSON.RequestModels;
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

    public string OpenWeatherToken => _configuration["OPENWEATHER:TOKEN"]!;

    public WeatherController(IHttpClientFactory httpClientFactory, IConfiguration configuration,
        IOpenWeatherService openWeatherService)
    {
        _httpClientFactory = httpClientFactory;
        _configuration = configuration;
        _openWeatherService = openWeatherService;
    }

    [HttpGet]
    public async Task<IActionResult> Today([FromQuery] GeoResponse ip)
    {
        var weather = await _openWeatherService.GetCurrentAsync(ip.Latitude, ip.Longitude, OpenWeatherToken);
        var fiveDayThreeHour = await _openWeatherService.GetFiveDayThreeHourAsync(ip.Latitude, ip.Longitude, OpenWeatherToken, 10);

        if (ip is null || weather is null || fiveDayThreeHour is null) return Problem();

        //var currentTime = DateTimeOffset.FromUnixTimeSeconds(weather.Dt + weather.Timezone).DateTime;
        var currentTime = DateTimeOffset.FromUnixTimeSeconds(weather.Dt);

        var temps = fiveDayThreeHour.List
            .Select(item => item.Main!.Temp)
            .ToArray();

        var forecasts = fiveDayThreeHour.List.GetTodayForecastsByTimeOfDay(currentTime);

        var dto = new TodayWeatherDTO
        {
            TopBar = new TopBarDTO
            {
                City = ip.City,
                Country = ip.CountryName,
                Region = ip.State,
                Latitude = ip.Latitude,
                Longitude = ip.Longitude,
            },
            ShortWheather = new ShortWeatherDTO
            {
                City = ip.City,
                Region = ip.State,
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
                City = ip.City,
                Country = ip.CountryName,
            },
        };

        return Ok(dto);
    }

    [HttpGet]
    public async Task<IActionResult> Hourly([FromQuery] GeoResponse ip)
    {
        if (ip is null) 
        {
            return Problem("IP address could not be retrieved.");
        }

        var weatherData = await _openWeatherService.GetFiveDayThreeHourAsync(ip.Latitude, ip.Longitude, OpenWeatherToken);
        if (weatherData?.List is null || weatherData.List.Count == 0)
        {
            return Problem("Weather data could not be retrieved.");
        }

        var dayDictionary = weatherData.List
            .GroupBy(fdwd => DateTimeOffset.FromUnixTimeSeconds(fdwd.DateTime).ToString("dddd, MMMM d"))
            .ToDictionary(g => g.Key, g => g.Select(fdwd =>
            {
                var dateTime = DateTimeOffset.FromUnixTimeSeconds(fdwd.DateTime);
                return new ThreeHourWeatherDTO
                {
                    Time = dateTime.ToString("HH:mm"),
                    Temp = fdwd.Main.Temp.EvaluateKelvin(),
                    Icon = fdwd.Weather[0].Icon,
                    Precipitation = fdwd.ProbabilityOfPrecipitation.FromPercent(),
                    FeelsLike = fdwd.Main.FeelsLike.EvaluateKelvin(),
                    Wind = (int)fdwd.Wind.Speed,
                    Humidity = fdwd.Main.Humidity,
                    Clouds = fdwd.Clouds.All,
                    Visibility = fdwd.Visibility,
                    Pressure = fdwd.Main.Pressure,
                };
            }).ToArray());

        return Ok(dayDictionary);
    }
}