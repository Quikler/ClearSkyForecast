import { useEffect, useState } from "react";
import { TopBarDTO } from "../interfaces/dto";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import TopBar from "./top-bar";
import Today from "./pages/today";
import FiveDayThreeHour from "./pages/five-day-three-hour";
import { Box, Button, Flex, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { fetchGeo } from "../services/geolocation";
import { MagnifierInput } from "./shared/inputs";
import { useFontSizes } from "../hooks/breakpoints";

export default function MainPanel() {
  const [topBar, setTopBar] = useState<TopBarDTO>();
  
  const { fiveXlToSmFs } = useFontSizes();

  useEffect(() => {
    fetchGeo().then(location => {
      setTopBar(location);
    }).catch(error => {
      console.error("Error fetching location:", error);
    });
  }, []);

  return (
    <main className="lg:container mx-auto">

      {/* Main */}
      <section className="text-white bg-blue-600 py-2 px-6 border-solid border-2 border-blue-800">
        {topBar ? <TopBar {...topBar} /> : <div>Loading...</div>}
      </section>

      <section className="text-white bg-blue-700 border-2 border-blue-500">
        <ul className="flex gap-12 items-center py-2 px-8">
          <li>
            <Link as={RouterLink} to='/'>Today</Link>
          </li>
          <li>
            <Link as={RouterLink} to='/hourly'>Hourly</Link>
          </li>
          {/* <li>10-Day</li>
          <li>Weekend</li>
          <li>Monthly</li> */}
        </ul>
      </section>

      <section className="mx-8 max-sm:mx-4 my-4"> {/* flex */}
        <Flex border='1px solid indigo' className="rounded-lg bg-blue-500 py-5" flexDirection='column' alignItems='center' my={4} gap={3}>
          <Text color='white' fontWeight='bold' letterSpacing={[0, 3, 5]} fontSize={fiveXlToSmFs} lineHeight={1} textAlign='center'>Search the weather in your favorite city!</Text>
          <Flex gap={3} w='100%' maxW={800}>
            <MagnifierInput w='100%' border='1px solid indigo' className="rounded-lg overflow-hidden" />
            <button className="px-6 bg-blue-600 text-white rounded-lg">Find</button>
          </Flex>
        </Flex>

        {/* Routes */}
        <div className="my-8">
          <Routes>
            <Route index element={<Today />} />
            <Route path="hourly" element={<FiveDayThreeHour />} />
          </Routes>
        </div>
      </section>

    </main>
  );
};