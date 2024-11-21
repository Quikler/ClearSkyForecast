using Backend.JSON.ResponseModels;

namespace Backend.Services.Interfaces;

public interface IOpenWeatherService
{
    Task<CurrentWeatherResponse?> GetCurrentAsync(double latitude, double longitude, string token);
    Task<FiveDayResponse?> GetFiveDayThreeHourAsync(double latitude, double longitude, string token, int count = 40);
}