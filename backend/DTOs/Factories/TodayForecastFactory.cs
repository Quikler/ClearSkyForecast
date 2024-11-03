using Backend.JSON.ResponseModels;
using Backend.Utils.Extensions;

namespace Backend.DTOs.Factories;

public static class TodayForecastFactory
{
    public static TodayForecastDTO[] FromForecasts(Dictionary<string, FiveDayWeatherData[]> forecasts)
    {
        var list = new List<TodayForecastDTO>();
        var lastKey = forecasts.FirstOrDefault().Key;

        foreach (var forecast in forecasts)
        {
            var value = forecast.Value;
            var todayForecast = new TodayForecastDTO
            {
                TimeOfDay = forecast.Key,
                Temp = value.Average(fdwd => fdwd.Main.Temp).EvaluateKelvin(),
                Icon = value[0].Weather[0].Icon,
                Precipitation = value[0].ProbabilityOfPrecipitation.FromPercent(),
                StartTime = DateTimeOffset.FromUnixTimeSeconds(value.MinBy(fdwd => fdwd.DateTime)!.DateTime).ToString("yyyy-MM-dd HH:mm"),
                EndTime = DateTimeOffset.FromUnixTimeSeconds(value.MaxBy(fdwd => fdwd.DateTime)!.DateTime).ToString("yyyy-MM-dd HH:mm"),
                IsCurrent = lastKey == forecast.Key,
            };
            list.Add(todayForecast);
        }

        return [..list];
    }
}