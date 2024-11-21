namespace Backend.DTOs;

public class TopBarDTO
{
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public string City { get; set; } = null!;
    public string Region { get; set; } = null!;
    public string Country { get; set; } = null!;
}