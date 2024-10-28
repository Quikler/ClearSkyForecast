namespace Backend.DTOs;

public class DetailedWeatherDTO
{
    public int FeelsLike { get; set; }
    public string Sunrise { get; set; }
    public string Sunset { get; set; }
    public int MaxTemp { get; set; }
    public int MinTemp { get; set; }
    public int Humidity { get; set; }
    public float Pressure { get; set; }
    public string Visibility { get; set; }
    public float Wind { get; set; }
}