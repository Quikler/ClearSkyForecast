import { ThemeProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from '../theme.ts';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)