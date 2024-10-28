namespace Backend.JSON.ResponseModels;

public struct IpInfoResponse
{
    public string? Ip { get; set; }
    public string? HostName { get; set; }
    public string? City { get; set; }
    public string? Region { get; set; }
    public string? Country { get; set; }
    public string? Loc { get; set; }
    public float Latitude { get; set; }
    public float Longitude { get; set; }
    public string? Org { get; set; }
    public int Postal { get; set; }
    public string? Timezone { get; set; }
}