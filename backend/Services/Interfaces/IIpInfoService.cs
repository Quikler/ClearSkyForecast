using Backend.JSON.ResponseModels;

namespace Backend.Services.Interfaces;

public interface IIpInfoService
{
    Task<IpInfoResponse> GetIpAsync(string token);
}