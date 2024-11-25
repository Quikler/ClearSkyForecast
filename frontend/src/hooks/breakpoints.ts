import { useBreakpointValue } from "@chakra-ui/react";

export const useFontSizes: any = (overrides?: Partial<ReturnType<typeof useFontSizes>>) => {
  const defaultSizes = {
    fiveXlFs: useBreakpointValue({ base: "xl", sm: "3xl", md: "4xl", lg: "5xl" }),
    fiveXlToSmFs: useBreakpointValue({ base: "md", sm: "lg", md: "xl", lg: "5xl" }),
    twoXlFs: useBreakpointValue({ base: "sm", sm: "lg", md: "xl", lg: "2xl" }),
    xlFs: useBreakpointValue({ base: "smaller", sm: "md", md: "lg", lg: "xl" }),
    lgFs: useBreakpointValue({ base: "12px", sm: "14px", md: "md", lg: "lg" }),
  };

  return { ...defaultSizes, ...overrides };
};

export const createSvgSize = (sizes: { base?: string; sm?: string; md?: string; lg?: string }) =>
  useBreakpointValue(sizes);

export const useSvgSizes: any = (overrides?: Partial<ReturnType<typeof useSvgSizes>>) => {
  const defaultSizes = {
    xlSvg: useBreakpointValue({ base: "64px", sm: "96px", md: "128px", lg: "164px" }),
    lgSvg: useBreakpointValue({ base: "28px", sm: "32px", md: "48px", lg: "64px" }),
    mdSvg: useBreakpointValue({ base: "24px", sm: "28px", md: "32px", lg: "48px" }),
    smSvg: useBreakpointValue({ base: "16px", sm: "24px", md: "28px", lg: "32px" }),
    smllstSvg: useBreakpointValue({ base: "12px", sm: "16px", md: "24px", lg: "24px" }),
  };

  return { ...defaultSizes, ...overrides };
};