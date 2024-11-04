import { Box, Divider, Flex, Grid, Text } from "@chakra-ui/react";
import { ArrowDown, ArrowUp, FeelsLike, Pressure, RainEssence, Clouds, WaterDrop, Wind, Visibility } from "../svgr/general-icons";
import { getOWSVGByName } from "../../services/image";
import { useState } from "react";
import { useSvgSize\ } from "../../hooks/breakpoints";
import { MenuDropdownProps } from "../../interfaces/shared";
import { ThreeHourWeatherDTO } from "../../interfaces/dto";

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

export function WeatherDropdown({
  time,
  temp,
  icon,
  precipitation,
  feelsLike,
  wind,
  humidity,
  clouds,
  visibility,
  pressure,
}: ThreeHourWeatherDTO) {
  const [isExpanded, setIsExpanded] = useState(false);

  // const midSvgSize = midSvg();
  // const smallSvgSize = smallSvg();
  // const smallestSvgSize = smallestSvg();

  const { midSvg: midSvgSize, smallSvg: smallSvgSize, smallestSvg: smallestSvgSize } = useSvgSize\();

  const onArrowClick = () => setIsExpanded(prev => !prev);

  return (
    <>
      <Flex px={[2, 3, 6]} borderWidth="1px" borderColor='whiteAlpha.600' justify='space-between'>
        <Grid flexGrow={1} ml={['0', '0', 'clamp(0px, 4vw, 64px)']} mr={2} templateColumns='repeat(4, 1fr)' columnGap='3' justifyItems='start' alignItems='center' rowGap='3'>
          <Text>{time}</Text>
          <Text>{temp}°</Text>
          {getOWSVGByName(icon, { width: midSvgSize, })}
          <Flex gap="1" alignItems='center'>
            <WaterDrop width={smallSvgSize} />
            <Text>{precipitation}%</Text>
          </Flex>
        </Grid>
        {isExpanded 
          ? (<ArrowUp onClick={onArrowClick} width={smallestSvgSize} />) 
          : (<ArrowDown onClick={onArrowClick} width={smallestSvgSize} />)}
      </Flex>

      {
        isExpanded && (
          <Box alignSelf='end' maxW={['100%', '100%', '90%']} borderWidth="1px" borderColor='whiteAlpha.600' width='full' px={[2, 3, 6]} py={[1, 2, 3]} gridColumn="1 / span 5">
            <Grid templateColumns='2fr auto 2fr auto 2fr' rowGap={3} columnGap={2} justifyItems='start' alignItems='center'>
              <Flex ml={['0', '0', 'clamp(0px, 4vw, 64px)']} gap={2}>
                <FeelsLike width={smallSvgSize} />
                <div>
                  <Text>Feels like</Text>
                  <Text>{feelsLike}°</Text>
                </div>
              </Flex>

              <Divider orientation='vertical' />

              <Flex ml={['0', '0', 'clamp(0px, 4vw, 64px)']} gap={2}>
                <Wind width={smallSvgSize} />
                <div>
                  <Text>Wind</Text>
                  <Text>{wind} km/h</Text>
                </div>
              </Flex>

              <Divider orientation='vertical' />

              <Flex ml={['0', '0', 'clamp(0px, 4vw, 64px)']} gap={2}>
                <RainEssence width={smallSvgSize} />
                <div>
                  <Text>Humidity</Text>
                  <Text>{humidity}%</Text>
                </div>
              </Flex>

              <Divider gridColumn="1 / span 5" />

              <Flex ml={['0', '0', 'clamp(0px, 4vw, 64px)']} gap={2}>
                <Clouds width={smallSvgSize} />
                <div>
                  <Text>Clouds</Text>
                  <Text>{clouds}%</Text>
                </div>
              </Flex>

              <Divider orientation='vertical' />

              <Flex ml={['0', '0', 'clamp(0px, 4vw, 64px)']} gap={2}>
                <Visibility width={smallSvgSize} />
                <div>
                  <Text>Visibility</Text>
                  <Text>{visibility}</Text>
                </div>
              </Flex>

              <Divider orientation='vertical' />

              <Flex ml={['0', '0', 'clamp(0px, 4vw, 64px)']} gap={2}>
                <Pressure width={smallSvgSize} />
                <div>
                  <Text>Pressure</Text>
                  <Text>{pressure}</Text>
                </div>
              </Flex>
              
            </Grid>
          </Box>
        )
      }
    </>
  );
}