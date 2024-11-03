namespace Backend.DTOs;

public class DetailedWeatherDTO
{
    public int FeelsLike { get; set; }
    public string Sunrise { get; set; } = null!;
    public string Sunset { get; set; } = null!;
    public int MaxTemp { get; set; }
    public int MinTemp { get; set; }
    public int Humidity { get; set; }
    public float Pressure { get; set; }
    public string Visibility { get; set; } = null!;
    public float Wind { get; set; }
    public string City { get; set; } = null!;
    public string Country { get; set; } = null!;
}