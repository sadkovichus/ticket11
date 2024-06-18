import { Navigate, Route, Routes } from 'react-router';
import { Suspense, lazy } from 'react';

const Layout = lazy(() => import('../../pages/layout/Layout'));
const Auth = lazy(() => import('../../pages/auth/Auth'));

export const RoutesName = {
  root: '/',
  auth: '/auth',
} as const;

const Routing = () => {
  const isAuth = false;

  return (
    <Routes>
      <Route path={`${RoutesName.root}`} element={isAuth ? <Layout /> : <Navigate to={'/auth'} />}></Route>
      <Route
        path={RoutesName.auth}
        element={
          <Suspense fallback={<p>loading...</p>}>
            <Auth />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Routing;
