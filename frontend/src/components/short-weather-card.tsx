import { Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import { ShortWeather } from "../interfaces/weather";

export const ShortWeatherCard: React.FC<ShortWeather> = ({
  city,
  region,
  currentTime,
  currentTemp,
  cloudState,
  maxTemp,
  minTemp,
  image: ImageComponent
}) => {
  return (
    <>
      <Card boxShadow='md' className="rounded-lg overflow-hidden">
          <CardHeader textColor='white' className="bg-indigo-600">
              <Heading size='md'>{city}, {region} Region as of {currentTime}</Heading>
          </CardHeader>
          <CardBody className="bg-indigo-500">
              <Flex p={4} justifyContent='space-between' gap={4} alignItems='center' pe='42px'>
                  <div className="text-white">
                      <Text fontWeight='bold' fontSize='48px'>{currentTemp}°</Text>
                      <Text fontWeight='medium' fontSize='24px'>{cloudState}</Text>
                      <Text fontWeight='medium' fontSize='24px'>Max - {maxTemp}° • Min - {minTemp}°</Text>
                  </div>
                  {ImageComponent && <ImageComponent />}
              </Flex>
          </CardBody>
      </Card>
    </>
  );
};