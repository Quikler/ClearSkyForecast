import { Card, CardBody, CardHeader, Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { Rain } from "../assets/images/weather-icons";
import WaterDrop from "../assets/images/water-drop";

export default function TodayWeaherCard() {
  return (
    <>
      <Card boxShadow='md' textColor='white' className="rounded-lg overflow-hidden" >
        <CardHeader className="bg-indigo-600">
          <Heading size='md'>Today's Forecast for Kryvyi Rih, Ukraine</Heading>
        </CardHeader>
        <CardBody className="bg-indigo-500">
          <Grid p={4} templateColumns='repeat(4, 1fr)' justifyItems='center' alignItems='center' gridRowGap='3'>
            <Text fontWeight='bold'>Time of day</Text>
            <Text fontWeight='bold'>Degree</Text>
            <Text fontWeight='bold'>Cloudiness</Text>
            <Text fontWeight='bold'>Precipitation</Text>

            <Divider gridColumn="1 / span 4"></Divider>

            {/* Morning */}
            <Text>Morning</Text>
            <Text>5°</Text>
            <Rain width="48px"></Rain>
            <Flex gap='1'>
              <WaterDrop></WaterDrop>
              <Text>13%</Text>
            </Flex>

            <Divider gridColumn="1 / span 4" borderColor='white' opacity='.2'></Divider>

            {/* Afternoon */}
            <Text>Afternoon</Text>
            <Text>10°</Text>
            <Rain width="48px"></Rain>
            <Flex gap='1'>
              <WaterDrop></WaterDrop>
              <Text>13%</Text>
            </Flex>

            <Divider gridColumn="1 / span 4" borderColor='white' opacity='.2'></Divider>

            {/* Evening */}
            <Text>Evening</Text>
            <Text>6°</Text>
            <Rain width="48px"></Rain>
            <Flex gap='1'>
              <WaterDrop></WaterDrop>
              <Text>7%</Text>
            </Flex>

            <Divider gridColumn="1 / span 4" borderColor='white' opacity='.2'></Divider>

            {/* Night */}
            <Text>Night</Text>
            <Text>-1°</Text>
            <Rain width="48px"></Rain>
            <Flex gap='1'>
              <WaterDrop></WaterDrop>
              <Text>0%</Text>
            </Flex>
          </Grid>
        </CardBody>
      </Card>
    </>
  );
};