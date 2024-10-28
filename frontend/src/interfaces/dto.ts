export interface TodayWeatherDTO {
  latitude: number;
  longitude: number;
  currentTime: string;
  currentTemp: number;
  cloudState: string;
  maxTemp: number;
  minTemp: number;
  ipInfo: IpInfoNameDTO;
  icon: string;
}

export interface IpInfoNameDTO {
  city: string,
  region: string,
  coutry: string,
  timeZone: string,
}