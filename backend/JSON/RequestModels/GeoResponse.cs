using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.JSON.RequestModels;

public class GeoResponse
{
    [FromQuery(Name = "country_code")]
    [JsonPropertyName("country_code")]
    public string CountryCode { get; set; } = null!;

    [FromQuery(Name = "country_name")]
    [JsonPropertyName("country_name")]
    public string CountryName { get; set; } = null!;

    [FromQuery(Name = "city")]
    [JsonPropertyName("city")]
    public string City { get; set; } = null!;

    [FromQuery(Name = "postal")]
    [JsonPropertyName("postal")]
    public string Postal { get; set; } = null!;

    [FromQuery(Name = "latitude")]
    [JsonPropertyName("latitude")]
    public double Latitude { get; set; }

    [FromQuery(Name = "longitude")]
    [JsonPropertyName("longitude")]
    public double Longitude { get; set; }

    [FromQuery(Name = "IPv4")]
    [JsonPropertyName("IPv4")]
    public string IPv4 { get; set; } = null!;

    [FromQuery(Name = "state")]
    [JsonPropertyName("state")]
    public string State { get; set; } = null!;
}
