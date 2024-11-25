import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import MainPanel from './components/main-panel';
import { ChakraProvider, extendTheme, Box, Button, useColorMode, Flex } from '@chakra-ui/react';
import SidePanel from './components/side-panel';

export default function App() {
  const {} = useColorMode();
  
  return (
    <BrowserRouter>
      <Flex direction="column" minHeight="100vh">
        <Flex flexGrow={1}>
          <SidePanel />
          <Box flexGrow={1}>
            <Header />
            <MainPanel />
          </Box>
        </Flex>
        <footer style={{ backgroundColor: "red", textAlign: "center", padding: "10px" }}>
          <Box>
            footer
          </Box>
        </footer>
      </Flex>
    </BrowserRouter>
  )
};1