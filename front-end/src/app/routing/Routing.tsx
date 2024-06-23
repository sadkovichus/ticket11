import { Route, Routes, useLocation, useNavigate } from 'react-router';
import { Suspense, lazy, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = lazy(() => import('../../pages/profile/Profile'));
const Auth = lazy(() => import('../../pages/auth/Auth'));

export const RoutesName = {
  root: '/',
  auth: '/auth',
  admin: '/admin',
} as const;

export const StorageName = {
  UserData: 'usdtt',
} as const;

const Routing = () => {
  const isAuth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth.status && location.pathname === RoutesName.root) {
      navigate(RoutesName.auth, { replace: true });
    }
  }, [isAuth]);

  return (
    <Routes>
      <Route path={`${RoutesName.root}`} element={<Profile />}></Route>
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
