namespace Backend.DTOs;

public class TodayForecastDTO
{
    public string TimeOfDay { get; set; }
    public int Temp { get; set; }
    public string Icon { get; set; }
    public int Precipitation { get; set; }
}