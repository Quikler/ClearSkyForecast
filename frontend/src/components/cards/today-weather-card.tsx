import { Card, CardBody, CardHeader, Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { WaterDrop } from "../svgr/weather-icons";
import { TodayForecastDTO } from "../../interfaces/dto";
import React from "react";
import { getOWSVGByName } from "../../services/image";
import { useFontSizes, useSvgSizes } from "../../hooks/breakpoints";

export default function TodayForecastCard({ forecasts }: { forecasts: TodayForecastDTO[] }) {
  const { xlFs } = useFontSizes();
  const { mdSvg } = useSvgSizes();
  
  return (
    <>
      <Card textColor='white' border='1px solid indigo' className="rounded-lg overflow-hidden" >
        <CardHeader className="bg-blue-600">
          <Heading fontSize={xlFs}>Today's Forecast for Kryvyi Rih, Ukraine</Heading>
        </CardHeader>
        <CardBody className="bg-blue-500">
          <Grid p={4} templateColumns='repeat(4, 1fr)' gridColumnGap='3' justifyItems='center' alignItems='center' gridRowGap='3'>
            <Text fontWeight='bold'>Time of day</Text>
            <Text fontWeight='bold'>Degree</Text>
            <Text fontWeight='bold'>Cloudiness</Text>
            <Text fontWeight='bold'>Precipitation</Text>

            {forecasts.map((forecast, index) => (
              <React.Fragment key={index}>
                <Divider 
                  gridColumn="1 / span 4"
                  borderColor={index !== 0 ? 'white' : undefined}
                  opacity={index !== 0 ? '.2' : undefined} />
                <Text 
                  fontWeight={forecast.isCurrent ? 'bold' : undefined} 
                  fontSize={forecast.isCurrent ? xlFs : undefined}>{forecast.timeOfDay}</Text>
                <Text 
                  fontWeight={forecast.isCurrent ? 'bold' : undefined} 
                  fontSize={forecast.isCurrent ? xlFs : undefined}>{forecast.temp}°</Text>
                {getOWSVGByName(forecast.icon, { width: "48px" })}
                <Flex gap="1" alignItems='center'>
                  <WaterDrop width={mdSvg} />
                  <Text 
                    fontWeight={forecast.isCurrent ? 'bold' : undefined} 
                    fontSize={forecast.isCurrent ? xlFs : undefined}>{forecast.precipitation}%</Text>
                </Flex>
              </React.Fragment>
            ))}
          </Grid>
        </CardBody>
      </Card>
    </>
  );
};