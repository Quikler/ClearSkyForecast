import { Card, CardBody, CardHeader, Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { Sunset, Sunrise } from "../svgr/openweather-icons";
import { DetailedWeatherDTO } from "../../interfaces/dto";
import { useFontSizes, useSvgSizes } from "../../hooks/breakpoints";

export default function DetailedWeatherCard({
  feelsLike,
  sunrise,
  sunset,
  maxTemp,
  minTemp,
  humidity,
  pressure,
  visibility,
  wind,
  city,
  country,
}: DetailedWeatherDTO) {

  const { fiveXlFs: fiveXlFontSize, xlFs: xlFontSize } = useFontSizes();
  const { bigSvg } = useSvgSizes();

  return (
    <Card border='1px solid indigo' shadow='2px 2px 5px gray' className="rounded-lg overflow-hidden">
      <CardHeader textColor='white' className="bg-blue-600">
        <Heading fontSize={xlFontSize}>Weather Today in {city}, {country}</Heading>
      </CardHeader>
      <CardBody className="bg-blue-500">
        <Grid textColor='white' p={4} templateColumns='repeat(2, 1fr)' gridRowGap='3'>
            <Flex mr={4}>
              <Text fontWeight='bold' fontSize={fiveXlFontSize}>{feelsLike}°</Text>
              <Text fontWeight='medium'>Feels like</Text>
            </Flex>
            <Grid gridTemplateColumns='repeat(3, 1fr)' alignItems='center' justifyItems='center'>
              <Text gridColumn={1}>Sunrise</Text>
              <Text gridColumn={3}>Sunset</Text>
              
              <Sunrise></Sunrise>
              <svg width={bigSvg} viewBox="0 0 102 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_64_101)">
                  <path d="M-1.00396e-05 34.4033C49.419 15.4331 94.7682 13.4017 101.091 29.8746L93.5177 32.7819C87.7287 17.7011 46.2114 19.561 0.969092 36.9279L-1.00396e-05 34.4033Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_64_101">
                    <rect width="32" height="96" fill="white" transform="translate(89.6237) rotate(69)"/>
                  </clipPath>
                </defs>
              </svg>
              <Sunset></Sunset>

              <Text gridColumn={1}>{sunrise}</Text>
              <Text gridColumn={3}>{sunset}</Text>
            </Grid>
          
          <Divider gridColumn="1 / span 2"></Divider>

          <Text fontWeight='medium' fontSize={xlFontSize}>High / Low</Text>
          <Text textAlign='end' fontSize={xlFontSize}>{maxTemp}° / {minTemp}°</Text>

          <Divider gridColumn="1 / span 2" borderColor='white' opacity='.2'></Divider>

          <Text fontWeight='medium' fontSize={xlFontSize}>Humidity</Text>
          <Text textAlign='end' fontSize={xlFontSize}>{humidity}%</Text>

          <Divider gridColumn="1 / span 2" borderColor='white' opacity='.2'></Divider>

          <Text fontWeight='medium' fontSize={xlFontSize}>Pressure</Text>
          <Text textAlign='end' fontSize={xlFontSize}>{pressure} mb</Text>

          <Divider gridColumn="1 / span 2" borderColor='white' opacity='.2'></Divider>

          <Text fontWeight='medium' fontSize={xlFontSize}>Visibility</Text>
          <Text textAlign='end' fontSize={xlFontSize}>{visibility}</Text>

          <Divider gridColumn="1 / span 2" borderColor='white' opacity='.2'></Divider>

          <Text fontWeight='medium' fontSize={xlFontSize}>Wind</Text>
          <Text textAlign='end' fontSize={xlFontSize}>{wind} km/h</Text>
        </Grid>
      </CardBody>
    </Card>
  );
};