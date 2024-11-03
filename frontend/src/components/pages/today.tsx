import { Flex, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TodayWeatherDTO, TopBarDTO } from "../../interfaces/dto";
import ShortWeatherCard from "../cards/short-weather-card";
import TodayForecastCard from "../cards/today-weather-card";
import DetailedWeatherCard from "../cards/datailed-weather-card";

interface TransferLocation {
  sendLocation: (location: TopBarDTO) => void;
};

export default function Today({ sendLocation }: TransferLocation) {
  const [todayWeather, setTodayWeather] = useState<TodayWeatherDTO>();

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
        setTodayWeather(data);
        sendLocation(data.topBar);
      }).catch(error => {
        console.error("Error fetching api/weather/today data:", error);
      });
  }

  return (
    <Grid gap="4" justifyContent="space-between" gridTemplateColumns={{ base: '1fr', lg: '3fr 2fr' }}>
      <Flex direction="column" gap="4">
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