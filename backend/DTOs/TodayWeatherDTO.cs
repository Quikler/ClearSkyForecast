namespace Backend.DTOs;

public class TodayWeatherDTO
{
    public TopBarDTO TopBar { get; set; } = null!;
    public ShortWheatherDTO ShortWheather { get; set; } = null!;
    public TodayForecastDTO[] TodayForecast { get; set; } = null!;
    public DetailedWeatherDTO DetailedWeather { get; set; } = null!;
}