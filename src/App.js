import './styles.css';

import { Routes, Route, Outlet, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Error from './components/Error';
import Cotizaciones from './components/Cotizaciones';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Error></Error>} />
        <Route path='/' element={<HomePage />} />
        <Route path='/cotizaciones' element={<Cotizaciones />} />
      </Routes>
    </div>
  );
}
