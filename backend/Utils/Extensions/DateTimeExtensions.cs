namespace Backend.Utils.Extensions;

public static class DateTimeExtensions
{
    public static string GetTimeOfDayByHour(this DateTimeOffset dateTime) =>
        dateTime.Hour switch
        {
            >= 5 and < 12 => "Morning",
            >= 12 and < 17 => "Afternoon",
            >= 17 and < 22 => "Evening",
            _ => "Night"
        };
    
}