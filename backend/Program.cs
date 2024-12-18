using Backend.Services;
using Backend.Services.Interfaces;
using Microsoft.OpenApi.Models;

const string CORS_POLICY = "CORS Policy";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddHttpClient();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: CORS_POLICY, builder =>
    {
        builder
            .WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddSingleton<IOpenWeatherService, OpenWeatherService>();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "My Weather API",
        Version = "v1",
        Contact = new OpenApiContact
        {
            Name = "Quikler",
            Email = string.Empty,
            Url = new Uri("https://github.com/Quikler/ClearSkyForecast"),
        },
        License = new OpenApiLicense
        {
            Name = "Use under MIT License",
            Url = new Uri("https://github.com/Quikler/ClearSkyForecast/blob/master/LICENSE"),
        }
    });
});

var app = builder.Build();

app.UseCors(CORS_POLICY);

app.MapControllers().RequireCors(CORS_POLICY);

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => // UseSwaggerUI Protected by if (env.IsDevelopment())
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        c.RoutePrefix = string.Empty;
    });
}

app.Run();

// To be able to access environment variables:
// [LINUX] Add this lines to your /etc/environment file:
// IPINFO__TOKEN=token
// OPENWEATHER__TOKEN=token
// [WINDOWS] Open cmd and type:
// setx IPINFO__TOKEN "token"
// setx OPENWEATHER__TOKEN "token"