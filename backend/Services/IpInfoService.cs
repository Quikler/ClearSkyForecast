using System.Text.Json;
using Backend.JSON.ResponseModels;
using Backend.Services.Interfaces;

namespace Backend.Services;

public class IpInfoService : IIpInfoService
{
    private readonly IHttpClientFactory _httpClientFactory;

    public IpInfoService(IHttpClientFactory httpClientFactory)
    {
        _httpClientFactory = httpClientFactory;
    }

    public async Task<IpInfoResponse> GetIpAsync(string token)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(token, nameof(token));

        var hc = _httpClientFactory.CreateClient();
        var apiUrl = $"https://ipinfo.io/json?token={token}";
        var response = await hc.GetAsync(apiUrl);

        var ipInfo = await response.Content.ReadFromJsonAsync<IpInfoResponse>();

        var loc = ipInfo!.Loc!.Split(',')!;
        ipInfo.Latitude = float.Parse(loc[0]);
        ipInfo.Longitude = float.Parse(loc[1]);

        return ipInfo;
    }
}