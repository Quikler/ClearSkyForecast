import { ThreeHourWeatherDTO } from "./dto";

export interface PrimaryColor {
  primaryColor: string;
}

export interface MenuDropdownProps {
  items: MenuItem[];
};

export interface MenuItem {
  label: string,
  href: string,
};

export interface DayWeatherDictionary { [key: string]: ThreeHourWeatherDTO[] };

export interface ThreeHourlyWeatherPair {
  day: string;
  weatherData: ThreeHourWeatherDTO[];
}