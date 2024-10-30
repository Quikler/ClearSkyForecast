namespace Backend.JSON.ResponseModels;

public class IpInfoResponse
{
    public string Ip { get; set; } = null!;
    public string HostName { get; set; } = null!;
    public string City { get; set; } = null!;
    public string Region { get; set; } = null!;
    public string Country { get; set; } = null!;
    public string Loc { get; set; } = null!;
    public float Latitude { get; set; }
    public float Longitude { get; set; }
    public string Org { get; set; } = null!;
    public int Postal { get; set; }
    public string Timezone { get; set; } = null!;
}