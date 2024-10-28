namespace Backend.DTOs;

public class TodayWeatherDTO
{
    public TopBarDTO TopBar { get; set; }
    public ShortWheatherDTO ShortWheather { get; set; }
    public TodayForecastDTO[] TodayForecast { get; set; }
    public DetailedWeatherDTO DetailedWeather { get; set; }
}