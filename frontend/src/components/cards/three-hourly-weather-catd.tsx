import { Card, CardBody, CardHeader, Flex, Heading } from "@chakra-ui/react";
import { WeatherDropdown } from "../shared/dropdowns";
import { useFontSizes } from "../../hooks/breakpoints";
import { ThreeHourlyWeatherPair } from "../../interfaces/shared";

export default function ThreeHourlyWeatherCard({ day, weatherData }: ThreeHourlyWeatherPair) {
  const { xlFs: xlFontSize } = useFontSizes();
  
  return (
    <Card border='1px solid indigo' shadow='0 0 5px gray' color='white' className="rounded-lg overflow-hidden">
        <CardHeader textColor='white' className="bg-indigo-600">
            <Heading fontSize={xlFontSize}>{day}</Heading>
        </CardHeader>
        <CardBody className="bg-indigo-500">
          <Flex direction='column' gap={3}>
            {weatherData.map((weather, index) => (
              <WeatherDropdown key={index} {...weather} />
            ))}
          </Flex>
        </CardBody>
    </Card>
  );
}