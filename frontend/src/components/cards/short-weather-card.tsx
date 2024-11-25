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
  const { xlSvg: bigSvg } = useSvgSizes();

  return (
    <Card border='1px solid indigo' className="rounded-lg overflow-hidden">
        <CardHeader textColor='white' className="bg-blue-600">
            <Heading fontSize={xlFontSize}>{city}, {region} Region as of {currentTime}</Heading>
        </CardHeader>
        <CardBody className="bg-blue-500">
            <Flex p={{ base: 0, md: 2, lg: 4 }} justifyContent='space-between' gap={4} alignItems='center' pe={{ base: 0, md: "24px", lg: "42px" }}>
                <div className="text-white">
                    <Text fontWeight='bold' fontSize={fiveXlFontSize}>{currentTemp}°</Text>
                    <Text fontWeight='medium' fontSize={twoXlFontSize}>{cloudState}</Text>
                    <Text fontWeight='medium' fontSize={twoXlFontSize}>Max - {maxTemp}° • Min - {minTemp}°</Text>
                </div>
                {getOWSVGByName(icon, { width: bigSvg })}
            </Flex>
        </CardBody>
    </Card>
  );
};