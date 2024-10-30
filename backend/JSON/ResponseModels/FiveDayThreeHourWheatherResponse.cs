using System.Text.Json.Serialization;

namespace Backend.JSON.ResponseModels;

public class FiveDayResponse
{
    [JsonPropertyName("cod")]
    public string Cod { get; set; } = null!;

    [JsonPropertyName("message")]
    public int Message { get; set; }

    [JsonPropertyName("cnt")]
    public int Count { get; set; }

    [JsonPropertyName("list")]
    public List<FiveDayWeatherData> List { get; set; } = null!;

    [JsonPropertyName("city")]
    public City City { get; set; } = null!;
}

public class FiveDayWeatherData
{

    [JsonPropertyName("main")]
    public MainWeather Main { get; set; } = null!;

    [JsonPropertyName("weather")]
    public List<WeatherCondition> Weather { get; set; } = null!;

    [JsonPropertyName("clouds")]
    public Clouds Clouds { get; set; } = null!;

    [JsonPropertyName("wind")]
    public Wind Wind { get; set; } = null!;

    [JsonPropertyName("visibility")]
    public int Visibility { get; set; }

    [JsonPropertyName("pop")]
    public float ProbabilityOfPrecipitation { get; set; }

    [JsonPropertyName("sys")]
    public SystemData System { get; set; } = null!;

    [JsonPropertyName("dt")]
    public long DateTime { get; set; }
    
    [JsonPropertyName("dt_txt")]
    public string DateTimeText { get; set; } = null!;
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
    public string Main { get; set; } = null!;

    [JsonPropertyName("description")]
    public string Description { get; set; } = null!;

    [JsonPropertyName("icon")]
    public string Icon { get; set; } = null!;
}

public class City
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public Coord Coord { get; set; } = null!;
    public string Country { get; set; } = null!;
    public int Population { get; set; }
    public int Timezone { get; set; }
    public int Sunrise { get; set; }
    public int Sunset { get; set; }
}