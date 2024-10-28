namespace Backend.Utils.Extensions;

public static class DateTimeExtensions
{
    public static string GetTimeOfDay(this DateTime dateTime)
    {
        int hour = dateTime.Hour;
        if (hour >= 5 && hour < 12) return "Morning";
        if (hour >= 12 && hour < 17) return "Afternoon";
        if (hour >= 17 && hour < 21) return "Evening";
        
        return "Night";
    }
}