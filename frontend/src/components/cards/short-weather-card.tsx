import { Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import { ShortWeatherDTO } from "../../interfaces/dto";
import { getOWSVGByName } from "../../services/image";
import { bigSvg, fiveXlFs, twoXlFs, xlFs } from "../../hooks/breakpoints";

export default function ShortWeatherCard ({
  city,
  region,
  currentTime,
  currentTemp,
  cloudState,
  maxTemp,
  minTemp,
  icon
}: ShortWeatherDTO) {
  return (
    <Card border='1px solid indigo' shadow='2px 2px 5px gray' className="rounded-lg overflow-hidden">
        <CardHeader textColor='white' className="bg-indigo-600">
            <Heading fontSize={xlFs()}>{city}, {region} Region as of {currentTime}</Heading>
        </CardHeader>
        <CardBody className="bg-indigo-500">
            <Flex p={{ base: 0, md: 2, lg: 4 }} justifyContent='space-between' gap={4} alignItems='center' pe={{ base: 0, md: "24px", lg: "42px" }}>
                <div className="text-white">
                    <Text fontWeight='bold' fontSize={fiveXlFs()}>{currentTemp}°</Text>
                    <Text fontWeight='medium' fontSize={twoXlFs()}>{cloudState}</Text>
                    <Text fontWeight='medium' fontSize={twoXlFs()}>Max - {maxTemp}° • Min - {minTemp}°</Text>
                </div><Text fontSize='2xl' />
                <div data-testid="weather-icon-wrap">
                  {getOWSVGByName(icon, { width: bigSvg() })}
                </div>
            </Flex>
        </CardBody>
    </Card>
  );
};