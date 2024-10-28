import { Card, CardBody, CardHeader, Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { Sunset, Sunrise } from "../assets/images/weather-icons";

export default function DetailedWheatherCard() {
  return (
    <>
      <Card boxShadow='md' className="rounded-lg overflow-hidden">
        <CardHeader textColor='white' className="bg-indigo-600">
          <Heading size='md'>Weather Today in Kryvyi Rih, Ukraine</Heading>
        </CardHeader>
        <CardBody className="bg-indigo-500">
          <Grid textColor='white' p={4} templateColumns='repeat(2, 1fr)' gridRowGap='3'>
              <Flex>
                <Text fontWeight='bold' fontSize='48px'>8°</Text>
                <Text fontWeight='medium' fontSize='18px'>Feels like</Text>
              </Flex>
              <Grid gridTemplateColumns='repeat(3, 1fr)' alignItems='center' justifyItems='center'>
                <Text gridColumn={1}>Sunrise</Text>
                <Text gridColumn={3}>Sunset</Text>
                
                <Sunrise></Sunrise>
                <svg width="102" height="65" viewBox="0 0 102 65" fill="none" xmlns="http://www.w3.org/2000/svg">
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

                <Text gridColumn={1}>7:27 am</Text>
                <Text gridColumn={3}>5:57 pm</Text>
              </Grid>
            
            <Divider gridColumn="1 / span 2"></Divider>

            <Text fontWeight='medium' fontSize='24px'>High / Low</Text>
            <Text fontSize='24px' textAlign='end'>10°/-1°</Text>

            <Divider gridColumn="1 / span 2" borderColor='white' opacity='.2'></Divider>

            <Text fontWeight='medium' fontSize='24px'>Humidity</Text>
            <Text fontSize='24px' textAlign='end'>67%</Text>

            <Divider gridColumn="1 / span 2" borderColor='white' opacity='.2'></Divider>

            <Text fontWeight='medium' fontSize='24px'>Pressure</Text>
            <Text fontSize='24px' textAlign='end'>1030.8 mb</Text>

            <Divider gridColumn="1 / span 2" borderColor='white' opacity='.2'></Divider>

            <Text fontWeight='medium' fontSize='24px'>Visibility</Text>
            <Text fontSize='24px' textAlign='end'>Unlimited</Text>

            <Divider gridColumn="1 / span 2" borderColor='white' opacity='.2'></Divider>

            <Text fontWeight='medium' fontSize='24px'>Wind</Text>
            <Text fontSize='24px' textAlign='end'>10 km/h</Text>
          </Grid>
        </CardBody>
      </Card>
    </>
  );
};