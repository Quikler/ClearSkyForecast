using Backend.DTOs;
using Backend.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class LocationController : ControllerBase
{
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IConfiguration _configuration;
    private readonly IIpInfoService _ipInfoService;

    public string IpInfoToken => _configuration["IPINFO:TOKEN"]!;

    public LocationController(IHttpClientFactory httpClientFactory, IConfiguration configuration, IIpInfoService ipInfoService)
    {
        _httpClientFactory = httpClientFactory;
        _configuration = configuration;
        _ipInfoService = ipInfoService;
    }

    [HttpGet]
    public async Task<IActionResult> Geolocation()
    {
        var ip = await _ipInfoService.GetIpAsync(_configuration["IPINFO:TOKEN"]!);
        return ip is not null ? Ok(new TopBarDTO
        {
            City = ip.City,
            Country = ip.Country,
            Region = ip.Region,
            Latitude = ip.Latitude,
            Longitude = ip.Longitude,
        }) : Problem();

        try
        {
            var data = await _ipInfoService.GetIpAsync(IpInfoToken);
            return Ok(new { data.Latitude, data.Longitude });
        }
        catch (HttpRequestException ex)
        {
            return Problem("Error fetching geolocation data: " + ex.Message);
        }
        catch (Exception ex)
        {
            return Problem("An unexpected error occurred: " + ex.Message);
        }
    }

    [HttpGet]
    public async Task<IActionResult> Name()
    {
        try
        {
            var data = await _ipInfoService.GetIpAsync(IpInfoToken);
            return Ok(data);
        }
        catch (HttpRequestException ex)
        {
            return Problem("Error fetching geolocation data: " + ex.Message);
        }
        catch (Exception ex)
        {
            return Problem("An unexpected error occurred: " + ex.Message);
        }
    }
}