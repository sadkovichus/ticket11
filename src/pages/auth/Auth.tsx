import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import s from './Auth.module.scss';
import Pattern from '../../types/auth/pattern';
import { lazy, useEffect } from 'react';
import { RoutesName } from '../../app/routing/Routing';
import useAuth from '../../hooks/useAuth';

const CreateUser = lazy(() => import('../../widgets/auth/create-user/CreateUser'));
const LogIn = lazy(() => import('../../widgets/auth/login/LogIn'));

const Auth = () => {
  const [searchParams, _] = useSearchParams();
  const location = useLocation();
  const auth = useAuth();
  const navigate = useNavigate();
  const data = (searchParams.get('state') || 'signIn') as 'create' | 'signIn';

  const pattern: Pattern = {
    create: {
      title: 'Erstellung rnv-Registrieren',
      component: (
        <Link className={s.component} to={location.pathname + '?state=signIn'}>
          Login →
        </Link>
      ),
      form: <CreateUser />,
      btn: <button className={s.btn}>Registrieren</button>,
    },
    signIn: {
      title: 'Erstellung rnv-Login',
      component: (
        <Link className={s.component} to={location.pathname + '?state=create'}>
          Registrieren →
        </Link>
      ),
      form: <LogIn />,
      btn: <button className={s.btn}>Login</button>,
    },
  };

  useEffect(() => {
    if (auth.status) {
      navigate(RoutesName.root, { replace: true });
    }
  }, [auth]);

  return (
    <div className={s.auth}>
      <section className={s.container}>
        <h1 className={s.title}>{location.pathname !== RoutesName.admin ? pattern['signIn'].title : pattern[data].title}</h1>
        {location.pathname === RoutesName.admin && pattern[data].component}
        {location.pathname !== RoutesName.admin ? pattern['signIn'].form : pattern[data].form}
      </section>
    </div>
  );
};

export default Auth;
