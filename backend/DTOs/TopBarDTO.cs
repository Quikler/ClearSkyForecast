namespace Backend.DTOs;

public class TopBarDTO
{
    public float Latitude { get; set; }
    public float Longitude { get; set; }
    public string City { get; set; } = null!;
    public string Region { get; set; } = null!;
    public string Country { get; set; } = null!;
}