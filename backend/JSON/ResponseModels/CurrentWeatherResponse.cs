using System.Text.Json.Serialization;

namespace Backend.JSON.ResponseModels;

public class Coord
{
    [JsonPropertyName("lon")]
    public float Longitude { get; set; }

    [JsonPropertyName("lat")]
    public float Latitude { get; set; }
}

public class Weather
{
    public int Id { get; set; }
    public string Main { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string Icon { get; set; } = null!;
}

public class Main
{
    [JsonPropertyName("temp")]
    public float Temp { get; set; }

    [JsonPropertyName("feels_like")]
    public float FeelsLike { get; set; }

    [JsonPropertyName("temp_min")]
    public float TempMin { get; set; }

    [JsonPropertyName("temp_max")]
    public float TempMax { get; set; }

    [JsonPropertyName("pressure")]
    public int Pressure { get; set; }

    [JsonPropertyName("humidity")]
    public int Humidity { get; set; }

    [JsonPropertyName("sea_level")]
    public int SeaLevel { get; set; }

    [JsonPropertyName("grnd_level")]
    public int GroundLevel { get; set; }
}

public class Wind
{
    [JsonPropertyName("speed")]
    public float Speed { get; set; }

    [JsonPropertyName("deg")]
    public int Degree { get; set; }

    [JsonPropertyName("gust")]
    public float Gust { get; set; }
}

public class Clouds
{
    [JsonPropertyName("all")]
    public int All { get; set; }
}

public class SystemData
{
    public int Type { get; set; }
    public int Id { get; set; }
    public string Country { get; set; } = null!;
    public long Sunrise { get; set; }
    public long Sunset { get; set; }
    public string Pod { get; set; } = null!;
}

public class CurrentWeatherResponse
{
    public Coord Coord { get; set; } = null!;
    public Weather[] Weather { get; set; } = null!;
    public string Base { get; set; } = null!;
    public Main Main { get; set; } = null!;
    public int Visibility { get; set; }
    public Wind Wind { get; set; } = null!;
    public Clouds Clouds { get; set; } = null!;
    public long Dt { get; set; }
    public SystemData Sys { get; set; } = null!;
    public int Timezone { get; set; }
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public int Cod { get; set; }
}