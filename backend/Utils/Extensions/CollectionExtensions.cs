using Backend.JSON.ResponseModels;

namespace Backend.Utils.Extensions;

public static class CollectionExtensions
{
    public static Dictionary<string, FiveDayWeatherData[]> GetTodayForecastsByTimeOfDay(this IEnumerable<FiveDayWeatherData> data, DateTimeOffset today)
    {
        today = today.Date;

        return data
            .Where(w =>
            {
                var dateTime = DateTimeOffset.FromUnixTimeSeconds(w.DateTime);
                return dateTime.DateTime < today.AddDays(1).AddHours(5);
            })
            .GroupBy(w => DateTimeOffset.FromUnixTimeSeconds(w.DateTime).GetTimeOfDayByHour())
            .ToDictionary(g => g.Key, g => g.Select(fdw => fdw).ToArray());
    }
}