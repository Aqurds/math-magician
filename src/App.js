import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='calculator' element={<Calculator />} />
        <Route path='quote' element={<Quotes />} />
      </Route>
    </Routes>
  );
}

export default App;
