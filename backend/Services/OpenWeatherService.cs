using System.Text.Json;
using Backend.JSON.ResponseModels;
using Backend.Services.Interfaces;

namespace Backend.Services;

public class OpenWeatherService : IOpenWeatherService
{
    private readonly IHttpClientFactory _httpClientFactory;

    public OpenWeatherService(IHttpClientFactory httpClientFactory)
    {
        _httpClientFactory = httpClientFactory;
    }

    public async Task<CurrentWeatherResponse?> GetCurrentAsync(float latitude, float longitude, string token)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(token, nameof(token));

        var hc = _httpClientFactory.CreateClient();
        var apiUrl = $"https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={token}";
        var response = await hc.GetAsync(apiUrl);

        return await response.Content.ReadFromJsonAsync<CurrentWeatherResponse>();
    }

    public async Task<FiveDayThreeHourWheatherResponse> GetFiveDayThreeHourAsync(float latitude, float longitude, string token, int count = 40)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(token, nameof(token));

        var hc = _httpClientFactory.CreateClient();
        var apiUrl = $"https://api.openweathermap.org/data/2.5/forecast?lat={latitude}&lon={longitude}&cnt={count}&appid={token}";
        var response = await hc.GetAsync(apiUrl);

        return await response.Content.ReadFromJsonAsync<FiveDayThreeHourWheatherResponse>();
    }
}