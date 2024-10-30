namespace Backend.DTOs;

public class ShortWheatherDTO
{
    public string City { get; set; } = null!;
    public string Region { get; set; } = null!;
    public string CurrentTime { get; set; } = DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm");
    public int CurrentTemp { get; set; }
    public string CloudState { get; set; } = null!;
    public int MaxTemp { get; set; }
    public int MinTemp { get; set; }
    public string Icon { get; set; } = null!;
}