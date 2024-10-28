using Backend.JSON.ResponseModels;

namespace Backend.Services.Interfaces;

public interface IOpenWeatherService
{
    Task<CurrentWeatherResponse?> GetCurrentAsync(float latitude, float longitude, string token);
    Task<FiveDayThreeHourWheatherResponse> GetFiveDayThreeHourAsync(float latitude, float longitude, string token, int count = 40);
}