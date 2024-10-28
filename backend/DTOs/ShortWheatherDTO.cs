namespace Backend.DTOs;

public class ShortWheatherDTO
{
    public string City { get; set; }
    public string Region { get; set; }
    public string CurrentTime { get; set; } = DateTime.Now.ToString("yyyy-MM-dd HH:mm");
    public int CurrentTemp { get; set; }
    public string CloudState { get; set; }
    public int MaxTemp { get; set; }
    public int MinTemp { get; set; }
    public string Icon { get; set; }
}