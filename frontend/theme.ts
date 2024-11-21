import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontSize: ['10px', '12px', '14px', '18px'],
      },
    },
    Link: {
      baseStyle: {
        fontSize: ['10px', '12px', '14px', '18px'], 
        color: 'white', 
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  colors: {
    brand: {
      900: "#1A365D",
      800: "#153E75",
      700: "#2A69AC",
    },
  },
});

export default theme;