import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import MainPanel from './components/main-panel';

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <MainPanel></MainPanel>
    </BrowserRouter>
  )
};