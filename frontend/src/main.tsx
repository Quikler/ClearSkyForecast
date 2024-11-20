import { ThemeProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from '../theme.ts';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./mocks/browser.ts')
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
})