import { Box, BoxProps, ChakraComponent, Flex, Input } from "@chakra-ui/react";
import { useFontSizes } from "../../hooks/breakpoints";
import { ElementType } from "react";

export const MagnifierInput: ChakraComponent<ElementType, BoxProps> = (props) => {
  const { lgFs } = useFontSizes();
  
  return (
    <Box {...props} bgColor='white' px={4} py={0}>
      <Flex justifyContent='space-between' alignItems='center' gap={2}>
        <Input px='0' border='0' fontSize={lgFs} placeholder='Search city' focusBorderColor='transparent'></Input>
        <svg height="16px" width="16px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
          <g>
            <path className="st0" d="M312.069,53.445c-71.26-71.26-187.194-71.26-258.454,0c-71.261,71.26-71.261,187.206,0,258.466   c71.26,71.26,187.194,71.26,258.454,0S383.329,124.705,312.069,53.445z M286.694,286.536   c-57.351,57.34-150.353,57.34-207.704-0.011s-57.351-150.353,0-207.693c57.351-57.351,150.342-57.351,207.693,0   S344.045,229.174,286.694,286.536z"/>
            <path className="st0" d="M101.911,112.531c-29.357,37.725-31.801,89.631-7.321,129.702c1.877,3.087,5.902,4.048,8.978,2.182   c3.065-1.888,4.037-5.903,2.16-8.978c-21.666-35.456-19.506-81.538,6.469-114.876c2.226-2.837,1.713-6.938-1.135-9.154   C108.227,109.193,104.125,109.695,101.911,112.531z"/>
            <path className="st0" d="M498.544,447.722l-132.637-129.2c-7.255-7.07-18.84-6.982-26.008,0.174l-21.033,21.033   c-7.156,7.156-7.234,18.742-0.153,25.986l129.19,132.636c14.346,17.324,35.542,18.35,51.917,1.964   C516.216,483.951,515.857,462.068,498.544,447.722z"/>
          </g>
        </svg>
      </Flex>
    </Box>
  );
}