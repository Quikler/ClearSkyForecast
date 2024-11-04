import { useEffect, useState } from "react";
import ThreeHourlyWeatherCard from "../cards/three-hourly-weather-catd";
import { DayWeatherDictionary } from "../../interfaces/shared";
import { Flex } from "@chakra-ui/react";

export default function FiveDayThreeHour() {
  const [hourlyWeather, setHourlyWeather] = useState<DayWeatherDictionary>();
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch(`https://localhost:7115/api/weather/hourly`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      }).then(data => {
        console.log(data);
        setHourlyWeather(data);
        //sendLocation(data.topBar);
      }).catch(error => {
        console.error("Error fetching api/weather/hourly data:", error);
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