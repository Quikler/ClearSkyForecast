export interface TodayWeatherDTO {
  shortWheather: ShortWeatherDTO;
  todayForecast: TodayForecastDTO[];
  detailedWeather: DetailedWeatherDTO;
}

export interface TopBarDTO {
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country_name: string;
}

export interface ShortWeatherDTO {
  city: string;
  region: string;
  currentTime: string;
  currentTemp: number;
  cloudState: string;
  maxTemp: number;
  minTemp: number;
  icon: string;
}

export interface TodayForecastDTO {
  timeOfDay: string;
  temp: number;
  icon: string;
  precipitation: number;
  isCurrent: boolean;
}

export interface DetailedWeatherDTO {
  feelsLike: number;
  sunrise: string;
  sunset: string;
  maxTemp: number;
  minTemp: number;
  humidity: number;
  pressure: number;
  visibility: string;
  wind: number;
  city: string;
  country: string;
}

export interface ThreeHourWeatherDTO {
  time: string;
  temp: number;
  icon: string;
  precipitation: number;
  feelsLike: number;
  wind: number;
  humidity: number;
  clouds: number;
  visibility: number;
  pressure: number;
}