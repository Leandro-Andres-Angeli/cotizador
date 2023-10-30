import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';

const AppRouter = () => {
  <Routes>
    {/* <Route path='*' element={<div>Not Found</div>} /> */}
    <Route path='/' element={<HomePage />} />
  </Routes>;
};
export default AppRouter;
