namespace Backend.DTOs;

public class TodayForecastDTO
{
    public string TimeOfDay { get; set; } = null!;
    public int Temp { get; set; }
    public string Icon { get; set; } = null!;
    public int Precipitation { get; set; }
    public bool IsCurrent { get; set; }
    public string StartTime { get; set; } = null!;
    public string EndTime { get; set; } = null!;
}