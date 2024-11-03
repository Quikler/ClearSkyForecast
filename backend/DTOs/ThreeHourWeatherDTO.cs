namespace Backend.DTOs;

public class ThreeHourWeatherDTO
{
    public string Time { get; set; } = null!;
    public int Temp { get; set; }
    public string Icon { get; set; } = null!;
    public int Precipitation { get; set; }
    public int FeelsLike { get; set; }
    public int Wind { get; set; }
    public int Humidity { get; set; }
    public int Clouds { get; set; }
    public int Visibility { get; set; }
    public int Pressure { get; set; }
}