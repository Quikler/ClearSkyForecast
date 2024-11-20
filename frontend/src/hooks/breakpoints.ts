import { useBreakpointValue } from "@chakra-ui/react";

export const useFontSizes = () => {
  return {
    fiveXlFs: useBreakpointValue({ base: "xl", sm: "3xl", md: "4xl", lg: "5xl" }),
    twoXlFs: useBreakpointValue({ base: "sm", sm: "lg", md: "xl", lg: "2xl" }),
    xlFs: useBreakpointValue({ base: "smaller", sm: "md", md: "lg", lg: "xl" }),
    lgFs: useBreakpointValue({ base: "12px", sm: "14px", md: "md", lg: "lg" }),
  };
};

export const useSvgSizes = () => {
  return {
    bigSvg: useBreakpointValue({ base: "64px", sm: "96px", md: "128px", lg: "164px" }),
    midSvg: useBreakpointValue({ base: "24px", sm: "32px", md: "48px", lg: "64px" }),
    smallSvg: useBreakpointValue({ base: "16px", sm: "24px", md: "28px", lg: "32px" }),
    smallestSvg: useBreakpointValue({ base: "12px", sm: "16px", md: "24px", lg: "28px" }),
  };
};