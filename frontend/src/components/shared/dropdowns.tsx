import { Box, Divider, Flex, Grid, Text } from "@chakra-ui/react";
import { ArrowDown, ArrowUp, FeelsLike, Pressure, RainEssence, Clouds, WaterDrop, Wind, Visibility } from "../svgr/general-icons";
import { getOWSVGByName } from "../../services/image";
import { useState } from "react";
import { useSvgSizes } from "../../hooks/breakpoints";
import { MenuDropdownProps } from "../../interfaces/shared";
import { ThreeHourWeatherDTO } from "../../interfaces/dto";
import { title } from "framer-motion/client";

export function MenuDropdown({ items }: MenuDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block">
      <button className="p-3 focus:outline-none" onClick={toggleMenu}>
        <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="25" height="3" fill="white" />
          <rect y="7" width="25" height="3" fill="white" />
          <rect y="14" width="25" height="3" fill="white" />
        </svg>
      </button>

      {isOpen && (
        <div
          onMouseLeave={closeMenu}
          className="absolute right-0 w-36 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 z-10 transition ease-in-out duration-200"
        >
          <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <li key={index} className="hover:bg-indigo-500">
                <a
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-white transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

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
  const {midSvg, smallSvg, smallestSvg} = useSvgSizes();

  const onArrowClick = () => setIsExpanded(prev => !prev);

  function a(){}

  const cardDictionary = [
    { title: "Feels like", value: `${feelsLike}°`, icon: <FeelsLike width={smallSvg} /> },
    { title: "Wind", value: `${wind} km/h`, icon: <Wind width={smallSvg} /> },
    { title: "Humidity", value: `${humidity}%`, icon: <RainEssence width={smallSvg} /> },
    { title: "Clouds", value: `${clouds}%`, icon: <Clouds width={smallSvg} /> },
    { title: "Visibility", value: `${visibility}`, icon: <Visibility width={smallSvg} /> },
    { title: "Pressure", value: `${pressure}`, icon: <Pressure width={smallSvg} /> },
  ];

  return (
    <>
      <Flex px={[2, 3, 6]} borderWidth="1px" borderColor='whiteAlpha.600' justify='space-between'>
        <Grid flexGrow={1} ml={['0', '0', 'clamp(0px, 4vw, 64px)']} mr={2} templateColumns='repeat(4, 1fr)' columnGap='3' justifyItems='start' alignItems='center' rowGap='3'>
          <Text>{time}</Text>
          <Text>{temp}°</Text>
          {getOWSVGByName(icon, { width: midSvg, })}
          <Flex gap="1" alignItems='center'>
            <WaterDrop width={smallSvg} />
            <Text>{precipitation}%</Text>
          </Flex>
        </Grid>
        {isExpanded 
          ? (<ArrowUp onClick={onArrowClick} width={smallestSvg} />) 
          : (<ArrowDown onClick={onArrowClick} width={smallestSvg} />)}
      </Flex>

      {
        isExpanded && (
          <Box alignSelf='end' maxW={['100%', '100%', '90%']} borderWidth="1px" borderColor='whiteAlpha.600' width='full' px={[2, 3, 6]} py={[1, 2, 3]} gridColumn="1 / span 5">
            <Grid templateColumns='2fr auto 2fr auto 2fr' rowGap={3} columnGap={2} justifyItems='start' alignItems='center'>
              
              {cardDictionary.map((val, index) => {
                return (
                  <>
                    <Flex ml={['0', '0', 'clamp(0px, 4vw, 64px)']} gap={2}>
                      {val.icon}
                      <div>
                        <Text>{val.title}</Text>
                        <Text>{val.value}</Text>
                      </div>
                    </Flex>
                  
                    {index < cardDictionary.length - 1 && index === 2
                      ? <Divider gridColumn="1 / span 5" /> 
                      : <Divider orientation="vertical" />}
                  </>
                );
              })}

            </Grid>
          </Box>
        )
      }
    </>
  );
}