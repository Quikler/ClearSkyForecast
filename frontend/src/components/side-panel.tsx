import { Box, Card, CardBody, Text, CardHeader, Flex, Heading, List, ListItem, Divider, ChakraComponent, BoxProps } from "@chakra-ui/react";
import { Account, Settings } from "./svgr/general-icons";
import { TextWithIcon } from "./shared/text";
import { ArrowLeftRounded } from "./svgr/interaction-icons";
import { useEffect, useState } from "react";
import { useSvgSizes } from "../hooks/breakpoints";

const SidePanel = (props: BoxProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const { smllstSvg, smSvg } = useSvgSizes();
  
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 700) {
  //       setIsExpanded(false);
  //     } else {
  //       setIsExpanded(true);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  function onClick() {
    setIsExpanded(!isExpanded);
  }
  
  return (
    <Box {...props} className="bg-blue-600" zIndex={1}>
      <Card shadow={0}>
        <CardHeader padding={{ base: "5px 10px", sm: "7.5px 15px", md: "20px" }} textAlign='center' textColor='white' className="bg-blue-700">
          <Flex alignItems='center' justifyContent={isExpanded ? "space-between" : "center"} gap={6}>
            {isExpanded && <Heading>ClearSky</Heading>}
            <ArrowLeftRounded width={smllstSvg} onClick={onClick} cursor='pointer' transform={isExpanded ? "" : "rotate(-90 0 0)"} />
          </Flex>
        </CardHeader>
        <CardBody padding={{ base: "5px 10px", sm: "7.5px 15px", md: "20px" }} color='white'>
          {isExpanded && (<Box border='1px solid black' px={4} py={2} className="bg-blue-500 rounded-lg">
            <Flex alignItems='center' gap={2}>
              <Box className="bg-blue-700 p-1 rounded-lg">
                <svg fill="#fff" width={smSvg} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path d="M12 3.6132812L12 28L9 28L9 23L7 23L7 28L4 28L4 46L21 46L35 46L46 46L46 15L35 15L35 11.279297L32 10.279297L32 4L30 4L30 9.6113281L28 8.9453125L28 4L26 4L26 8.2792969L12 3.6132812 z M 14 6.3886719L33 12.720703L33 44L28 44L28 40.855469C29.715786 40.405591 31 38.850301 31 37C31 34.802706 29.197294 33 27 33C24.802706 33 23 34.802706 23 37C23 38.850301 24.284214 40.405591 26 40.855469L26 44L21 44L21 28L14 28L14 6.3886719 z M 16 12L16 14L22 14L22 12L16 12 z M 16 16L16 18L31 18L31 16L16 16 z M 37 19L42 19L42 22L37 22L37 19 z M 16 20L16 22L24 22L24 20L16 20 z M 26 20L26 22L31 22L31 20L26 20 z M 16 24L16 26L31 26L31 24L16 24 z M 37 24L42 24L42 27L37 27L37 24 z M 23 28L23 30L31 30L31 28L23 28 z M 37 29L42 29L42 32L37 32L37 29 z M 8 32L11 32L11 34L8 34L8 32 z M 14 32L17 32L17 34L14 34L14 32 z M 37 34L42 34L42 37L37 37L37 34 z M 8 36L11 36L11 38L8 38L8 36 z M 14 36L17 36L17 38L14 38L14 36 z M 37 39L42 39L42 42L37 42L37 39 z M 8 40L11 40L11 42L8 42L8 40 z M 14 40L17 40L17 42L14 42L14 40 z"/>
                </svg>
              </Box>
              <Box>
                <Text fontSize={12}>Weather track</Text>
                <Text>Dnipro</Text>
              </Box>
            </Flex>
          </Box>)}

          {isExpanded && <Divider my={6} />}

          <List fontSize={20} spacing={{ base: 1, md: 6 }}>
            <ListItem><TextWithIcon title="Account" isTitleVisible={isExpanded} icon={<Account width={smllstSvg} />} /></ListItem>
            <ListItem><TextWithIcon title="Settings" isTitleVisible={isExpanded} icon={<Settings width={smllstSvg} />} /></ListItem>
          </List>
        </CardBody>
      </Card>
    </Box>
  );
};

export default SidePanel;