import { useEffect, useState } from "react";
import ThreeHourlyWeatherCard from "../cards/three-hourly-weather-catd";
import { DayWeatherDictionary } from "../../interfaces/shared";
import { Flex } from "@chakra-ui/react";
import { fetchGeo } from "../../services/geolocation";

export default function FiveDayThreeHour() {
  const [hourlyWeather, setHourlyWeather] = useState<DayWeatherDictionary>();
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetchGeo()
      .then(location => {
        console.log("[LOCATION]:", location);
        return fetch(`https://localhost:7115/api/weather/hourly?${new URLSearchParams(location)}`);
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      })
      .then(data => {
        console.log("Weather data:", data);
        setHourlyWeather(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
  
  return (
    <Flex direction='column' gap={3}>
      {hourlyWeather && Object.entries(hourlyWeather).map(([day, weatherData], index) => (
        <ThreeHourlyWeatherCard key={index} day={day} weatherData={weatherData} />
      ))}
    </Flex>
  );
}