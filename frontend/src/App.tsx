import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import MainPanel from './components/main-panel';
import { useBreakpointValue } from "@chakra-ui/react";

export const fiveXlFs = () => useBreakpointValue({ base: "xl", sm: "3xl", md: "4xl", lg: "5xl" });
export const twoXlFs = () => useBreakpointValue({ base: "sm", sm: "lg", md: "xl", lg: "2xl" });
export const xlFs = () => useBreakpointValue({ base: "smaller", sm: "md", md: "lg", lg: "xl" });
export const lgFs = () => useBreakpointValue({ base: "6px", sm: "8px", md: "md", lg: "lg" });

export const bigSvg = () => useBreakpointValue({ base: "64px", sm: "96px", md: "128px", lg: "164px" });
export const midSvg = () => useBreakpointValue({ base: "24px", sm: "32px", md: "48px", lg: "64px" });
export const smallSvg = () => useBreakpointValue({ base: "16px", sm: "24px", md: "28px", lg: "32px" });
export const smallestSvg = () => useBreakpointValue({ base: "12px", sm: "16px", md: "24px", lg: "28px" });

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <MainPanel></MainPanel>
    </BrowserRouter>
  )
};