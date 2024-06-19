import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router';
import { Suspense, lazy, useEffect } from 'react';

const Layout = lazy(() => import('../../pages/layout/Layout'));
const Auth = lazy(() => import('../../pages/auth/Auth'));

export const RoutesName = {
  root: '/',
  auth: '/auth',
  admin: '/addminpanelultradrocherhuizalupadaaaaaaasperma',
} as const;

const Routing = () => {
  const isAuth = false;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth && location.pathname === RoutesName.root) {
      navigate(RoutesName.auth, { replace: true });
    }
  }, [isAuth]);

  return (
    <Routes>
      <Route path={`${RoutesName.root}`} element={<Layout />}></Route>
      <Route
        path={RoutesName.auth}
        element={
          <Suspense fallback={<p>loading...</p>}>
            <Auth />
          </Suspense>
        }
      />
      <Route
        path={RoutesName.admin}
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
