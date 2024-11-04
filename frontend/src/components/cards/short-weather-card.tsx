import { Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import { ShortWeatherDTO } from "../../interfaces/dto";
import { getOWSVGByName } from "../../services/image";
import { useFontSizes as useFontSizes, useSvgSizes } from "../../hooks/breakpoints";

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
  const { fiveXlFs: fiveXlFontSize, twoXlFs: twoXlFontSize, xlFs: xlFontSize } = useFontSizes();
  const { bigSvg } = useSvgSizes();

  return (
    <Card border='1px solid indigo' shadow='2px 2px 5px gray' className="rounded-lg overflow-hidden">
        <CardHeader textColor='white' className="bg-indigo-600">
            <Heading fontSize={xlFontSize}>{city}, {region} Region as of {currentTime}</Heading>
        </CardHeader>
        <CardBody className="bg-indigo-500">
            <Flex p={{ base: 0, md: 2, lg: 4 }} justifyContent='space-between' gap={4} alignItems='center' pe={{ base: 0, md: "24px", lg: "42px" }}>
                <div className="text-white">
                    <Text fontWeight='bold' fontSize={fiveXlFontSize}>{currentTemp}°</Text>
                    <Text fontWeight='medium' fontSize={twoXlFontSize}>{cloudState}</Text>
                    <Text fontWeight='medium' fontSize={twoXlFontSize}>Max - {maxTemp}° • Min - {minTemp}°</Text>
                </div><Text fontSize='2xl' />
                <div data-testid="weather-icon-wrap">
                  {getOWSVGByName(icon, { width: bigSvg })}
                </div>
            </Flex>
        </CardBody>
    </Card>
  );
};