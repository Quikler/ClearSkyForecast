using System.Text.Json.Serialization;

namespace Backend.JSON.ResponseModels;

public class FiveDayThreeHourWheatherResponse
{
    [JsonPropertyName("cod")]
    public string Cod { get; set; }

    [JsonPropertyName("message")]
    public int Message { get; set; }

    [JsonPropertyName("cnt")]
    public int Count { get; set; }

    [JsonPropertyName("list")]
    public List<WeatherData> List { get; set; }
}

public class WeatherData
{
    [JsonPropertyName("dt")]
    public long DateTime { get; set; }

    [JsonPropertyName("main")]
    public MainWeather Main { get; set; }

    [JsonPropertyName("weather")]
    public List<WeatherCondition> Weather { get; set; }

    [JsonPropertyName("clouds")]
    public Clouds Clouds { get; set; }

    [JsonPropertyName("wind")]
    public Wind Wind { get; set; }

    [JsonPropertyName("visibility")]
    public int Visibility { get; set; }

    [JsonPropertyName("pop")]
    public float ProbabilityOfPrecipitation { get; set; }

    [JsonPropertyName("sys")]
    public Sys Sys { get; set; }

    [JsonPropertyName("dt_txt")]
    public string DateTimeText { get; set; }
}

public class MainWeather
{
    [JsonPropertyName("temp")]
    public float Temp { get; set; }

    [JsonPropertyName("feels_like")]
    public double FeelsLike { get; set; }

    [JsonPropertyName("temp_min")]
    public double TemMin { get; set; }

    [JsonPropertyName("temp_max")]
    public double TemMax { get; set; }

    [JsonPropertyName("pressure")]
    public int Pressure { get; set; }

    [JsonPropertyName("sea_level")]
    public int SeaLevel { get; set; }

    [JsonPropertyName("grnd_level")]
    public int GroundLevel { get; set; }

    [JsonPropertyName("humidity")]
    public int Humidity { get; set; }

    [JsonPropertyName("temp_kf")]
    public double TempKf { get; set; }
}

public class WeatherCondition
{
    [JsonPropertyName("id")]
    public int Id { get; set; }

    [JsonPropertyName("main")]
    public string Main { get; set; }

    [JsonPropertyName("description")]
    public string Description { get; set; }

    [JsonPropertyName("icon")]
    public string Icon { get; set; }
}