import { Flex, Grid, Text } from "@chakra-ui/react";
import { ShortWeatherCard } from "./short-weather-card";
import TodayWeaherCard from "./today-wheather-card";
import DetailedWheatherCard from "./datailed-wheather-card";
import React, { useEffect, useState } from "react";
import { TodayWeatherDTO } from "../interfaces/dto";
import { getWeatherImageByName as getOWSVGByName } from "../services/image";
import { Size } from "../interfaces/svg";

export default function Sections() {
  const [weather, setWeather] = useState<TodayWeatherDTO>();
  const [icon, setIcon] = useState<React.FC<Size>>();

  useEffect(() => {
    getCurrentWeather();
  }, []);

  const getCurrentWeather = async () => {
    fetch(`https://localhost:7115/api/weather/today`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      }).then(data => {
        console.log(data);
        
        setWeather(data);
        const icon = () => getOWSVGByName(data.icon, { width: "164px" });
        setIcon(() => icon);

      }).catch(error => {
        console.error("Error fetching weather data:", error);
      });
  }

  return (
    <main className="container mx-auto">
      <section className="text-white bg-indigo-600 py-2 px-6">
        <Text fontSize='4xl'>{weather?.latitude} °N, {weather?.longitude} °E</Text>
        <Text fontSize='2xl'>{weather?.ipInfo.city}, {weather?.ipInfo.region} Oblast</Text>
      </section>
      <section className="text-white bg-indigo-500">
        <ul className="flex gap-12 items-center py-2 px-8">
          <li>
            <a href="">Today</a>
          </li>
          <li>Hourly</li>
          <li>10-Day</li>
          <li>Weekend</li>
          <li>Monthly</li>
        </ul>
      </section>
      <Grid py='4' px='8' gap='4' justifyContent='space-between' gridTemplateColumns='3fr 2fr'>
        <Flex direction='column' gap='4'>
          <ShortWeatherCard city={weather?.ipInfo?.city}
                            region={weather?.ipInfo.region}
                            currentTime={weather?.currentTime}
                            currentTemp={weather?.currentTemp}
                            cloudState={weather?.cloudState}
                            maxTemp={weather?.maxTemp}
                            minTemp={weather?.minTemp}
                            image={icon}
                            >
          </ShortWeatherCard>
          <TodayWeaherCard></TodayWeaherCard>
        </Flex>
        <div>
          <DetailedWheatherCard></DetailedWheatherCard>
        </div>
      </Grid>
    </main>
  );
};