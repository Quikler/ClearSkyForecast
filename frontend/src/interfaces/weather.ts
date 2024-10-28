import { Size } from "./svg";

export interface ShortWeather {
  city?: string,
  region?: string,
  currentTime?: string,
  currentTemp?: number,
  cloudState?: string,
  maxTemp?: number,
  minTemp?: number,
  image?: React.FC<Size>
}