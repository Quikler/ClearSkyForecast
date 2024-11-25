import { Box, Flex, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TodayWeatherDTO } from "../../interfaces/dto";
import ShortWeatherCard from "../cards/short-weather-card";
import TodayForecastCard from "../cards/today-weather-card";
import DetailedWeatherCard from "../cards/datailed-weather-card";
import { fetchGeoAndApi } from "../../services/geolocation";

export default function Today() {
  const [todayWeather, setTodayWeather] = useState<TodayWeatherDTO>();

  useEffect(() => {
    getCurrentWeather();
  }, []);

  const getCurrentWeather = async () => {
    fetchGeoAndApi('https://localhost:7115/api/weather/today')
      .then(data => {
        console.log(data);
        setTodayWeather(data);
      }).catch(error => {
        console.error("Error fetching api/weather/today data:", error);
      });
  }

  return (
    <Grid gap="8" justifyContent="space-between" gridTemplateColumns={{ base: '1fr', xl: '3fr 2fr' }}>
      <Flex direction="column" gap="8">
        {todayWeather ? (
          <>
            <ShortWeatherCard {...todayWeather.shortWheather} />
            <TodayForecastCard forecasts={todayWeather.todayForecast} />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Flex>
      <div>
        {todayWeather ? (
          <DetailedWeatherCard {...todayWeather.detailedWeather} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Grid>
  );
}