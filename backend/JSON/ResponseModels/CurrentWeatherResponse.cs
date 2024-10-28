namespace Backend.JSON.ResponseModels;

public class Coord
{
    public float Lon { get; set; }
    public float Lat { get; set; }
}

public class Weather
{
    public int Id { get; set; }
    public string? Main { get; set; }
    public string? Description { get; set; }
    public string? Icon { get; set; }
}

public class Main
{
    public float Temp { get; set; }
    public float FeelsLike { get; set; }
    public float TempMin { get; set; }
    public float TempMax { get; set; }
    public int Pressure { get; set; }
    public int Humidity { get; set; }
    public int SeaLevel { get; set; }
    public int GrndLevel { get; set; }
}

public class Wind
{
    public float Speed { get; set; }
    public int Deg { get; set; }
    public float Gust { get; set; }
}

public class Clouds
{
    public int All { get; set; }
}

public class Sys
{
    public int Type { get; set; }
    public int Id { get; set; }
    public string? Country { get; set; }
    public long Sunrise { get; set; }
    public long Sunset { get; set; }
    public string Pod { get; set; }
}

public class CurrentWeatherResponse
{
    public Coord? Coord { get; set; }
    public Weather[]? Weather { get; set; }
    public string? Base { get; set; }
    public Main? Main { get; set; }
    public int Visibility { get; set; }
    public Wind? Wind { get; set; }
    public Clouds? Clouds { get; set; }
    public long Dt { get; set; }
    public Sys? Sys { get; set; }
    public int Timezone { get; set; }
    public int Id { get; set; }
    public string? Name { get; set; }
    public int Cod { get; set; }
}