import { Box, Divider, Flex, Grid, Text } from "@chakra-ui/react";
import { ArrowDown, ArrowUp, WaterDrop } from "../svgr/general-icons";
import { getOWSVGByName } from "../../services/image";
import { useState } from "react";
import { midSvg, smallestSvg, smallSvg } from "../../App";
import { MenuDropdownProps } from "../../interfaces/shared";

export function MenuDropdown({ items }: MenuDropdownProps) {
  function onClick() {
    const menu = document.getElementById('dropdownMenu');
    menu?.classList.toggle('hidden');
  }
  
  return (
    <>
      <div className="relative">
        <button className='bg-indigo-600 p-3 rounded-md' onClick={onClick}>
          <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="25" height="3" fill="white"/>
            <rect y="7" width="25" height="3" fill="white"/>
            <rect y="14" width="25" height="3" fill="white"/>
          </svg>
        </button>

        <div id="dropdownMenu" className="hidden absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white z-10 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export function WeatherDropdown() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const onArrowClick = () => setIsExpanded(prev => !prev);
  
  return (
    <>
      <Flex px={[2, 3, 6]} borderWidth="1px" borderColor='whiteAlpha.600' justify='space-between'>
        <Grid flexGrow={1} ml={['0', '0', 'clamp(0px, 4vw, 64px)']} mr={2} templateColumns='repeat(4, 1fr)' columnGap='3' justifyItems='start' alignItems='center' rowGap='3'>
          <Text>9:00</Text>
          <Text>9°</Text>
          {getOWSVGByName("10d", { width: midSvg() })}
          <Flex gap="1" alignItems='center'>
            <WaterDrop width={smallSvg()} />
            <Text>10%</Text>
          </Flex>
        </Grid>
        {isExpanded 
          ? (<ArrowUp onClick={onArrowClick} width={smallestSvg()} />) 
          : (<ArrowDown onClick={onArrowClick} width={smallestSvg()} />)}
      </Flex>

      {
        isExpanded && (
          <Box alignSelf='end' maxW={['100%', '100%', '90%']} borderWidth="1px" borderColor='whiteAlpha.600' width='full' px={[2, 3, 6]} py={[1, 2, 3]} gridColumn="1 / span 5">
            <Grid templateColumns='2fr auto 2fr auto 2fr' rowGap={3} columnGap={2} justifyItems='start' alignItems='center'>
              <Flex ml={['0', '0', 'clamp(0px, 4vw, 64px)']} gap={2}>
                <ArrowDown width='24px' />
                <div>
                  <Text>Feels like</Text>
                  <Text>8°</Text>
                </div>
              </Flex>

              <Divider orientation='vertical' />

              <Flex ml={['0', '0', 'clamp(0px, 4vw, 64px)']} gap={2}>
                <ArrowDown width='24px' />
                <div>
                  <Text>Wind</Text>
                  <Text>W 27 km/h</Text>
                </div>
              </Flex>

              <Divider orientation='vertical' />

              <Flex ml={['0', '0', 'clamp(0px, 4vw, 64px)']} gap={2}>
                <ArrowDown width='24px' />
                <div>
                  <Text>Humidity</Text>
                  <Text>55%</Text>
                </div>
              </Flex>

              <Divider gridColumn="1 / span 5" />

              <Flex ml={['0', '0', 'clamp(0px, 4vw, 64px)']} gap={2}>
                <ArrowDown width='24px' />
                <div>
                  <Text>Cloud Cover</Text>
                  <Text>67%</Text>
                </div>
              </Flex>

              <Divider orientation='vertical' />

              <Flex ml={['0', '0', 'clamp(0px, 4vw, 64px)']} gap={2}>
                <ArrowDown width='24px' />
                <div>
                  <Text>Rain Amount</Text>
                  <Text>0 mm</Text>
                </div>
              </Flex>

              <Divider orientation='vertical' />

              <Flex ml={['0', '0', 'clamp(0px, 4vw, 64px)']} gap={2}>
                <ArrowDown width='24px' />
                <div>
                  <Text>Pressure</Text>
                  <Text>1025</Text>
                </div>
              </Flex>
              
            </Grid>
          </Box>
        )
      }
    </>
  );
}