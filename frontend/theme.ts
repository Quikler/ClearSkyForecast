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
});

export default theme;