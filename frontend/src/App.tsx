import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import MainPanel from './components/main-panel';
import { ChakraProvider, extendTheme, Box, Button, useColorMode, Flex } from '@chakra-ui/react';
import SidePanel from './components/side-panel';

export default function App() {
  const {} = useColorMode();
  
  return (
    <BrowserRouter>
      <Flex>
        <SidePanel />
        <Box flexGrow={1}>
          <Header></Header>
          <MainPanel></MainPanel>
        </Box>
      </Flex>
    </BrowserRouter>
  )
};1