import { useState } from "react";
import { TopBarDTO } from "../interfaces/dto";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import TopBar from "./top-bar";
import Today from "./pages/today";
import FiveDayThreeHour from "./pages/five-day-three-hour";
import { Link } from "@chakra-ui/react";

export default function MainPanel() {
  const [topBar, setTopBar] = useState<TopBarDTO>();
  
  const onLocationReceive = (topBarDTO: TopBarDTO) => {
    setTopBar(topBarDTO);
  };

  return (
    <main className="lg:container mx-auto">

      {/* Main */}
      <section className="text-white bg-indigo-600 py-2 px-6 border-solid border-2 border-indigo-800">
        {topBar ? <TopBar {...topBar} /> : <div>Loading...</div>}
      </section>

      <section className="text-white bg-indigo-700 border-2 border-indigo-500">
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

      {/* Routes */}
      <section className="mx-8 max-sm:mx-4 my-4">
        <Routes>
          <Route index element={<Today sendLocation={onLocationReceive} />} />
          <Route path="hourly" element={<FiveDayThreeHour />} />
        </Routes>
      </section>

    </main>
  );
};