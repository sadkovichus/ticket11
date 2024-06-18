import { Link, useSearchParams } from 'react-router-dom';
import s from './Auth.module.scss';
import Pattern from '../../types/auth/pattern';
import { lazy } from 'react';

const CreateUser = lazy(() => import('../../widgets/auth/create-user/CreateUser'));
const LogIn = lazy(() => import('../../widgets/auth/login/LogIn'));

const Auth = () => {
  const [searchParams, _] = useSearchParams();
  const data = (searchParams.get('state') || 'signIn') as 'create' | 'signIn';

  const pattern: Pattern = {
    create: {
      title: 'Erstellung rnv-Registrieren',
      component: (
        <Link className={s.component} to='/auth'>
          Login →
        </Link>
      ),
      form: <CreateUser />,
      btn: <button className={s.btn}>Registrieren</button>,
    },
    signIn: {
      title: 'Erstellung rnv-Login',
      component: (
        <Link className={s.component} to='/auth?state=create'>
          Registrieren →
        </Link>
      ),
      form: <LogIn />,
      btn: <button className={s.btn}>Login</button>,
    },
  };

  return (
    <div className={s.auth}>
      <section className={s.container}>
        <h1 className={s.title}>{pattern[data].title}</h1>
        {pattern[data].component}
        {pattern[data].form}
        {pattern[data].btn}
      </section>
    </div>
  );
};

export default Auth;
