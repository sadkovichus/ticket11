import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../../pages/layout/Layout';

export const RoutesName = {
  root: '/',
} as const;

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${RoutesName.root}`} element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
