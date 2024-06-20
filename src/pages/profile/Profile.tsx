// import QRCode from 'react-qr-code';
import s from './Profile.module.scss';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import useStorage from '../../hooks/useStorage';
import { RoutesName, StorageName } from '../../app/routing/Routing';
import qrImg from '../../../public/Снимок экрана 2024-06-20 211504.png';
import { useNavigate } from 'react-router';
import { removeUser } from '../../store/slices/userSlices/userSlice';

const Profile = () => {
  const [isActive, setIsActive] = useState(false);
  const selector = useAppSelector(state => state.userSlice);
  const { storageValue } = useStorage(StorageName.UserData, selector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

    const exit = () => {
        dispatch(removeUser());
        localStorage.removeItem(StorageName.UserData);
        navigate(RoutesName.auth, { replace: true });
    }

  return (
    <div className={s.profile}>
      <div onClick={() => setIsActive(false)} className={`${isActive ? s.active_back : ''} ${s.back}`}>
        <img src={qrImg} alt='' />

        {/* <QRCode
          onClick={() => setIsActive(true)}
          style={{ height: '50%', width: '50%' }}
          className={s.qrcode_img}
        //   viewBox={'0 0 100 100'}
          value={'https://pornhub.com'}
        /> */}
      </div>
      <div className={s.container}>
        <h1 className={s.title}>Persönliche Daten</h1>
        <p className={s.text}>Um interaktive Daten zu erhalten, klicken Sie auf die Schaltfläche „Ärtdem“.</p>
        <section className={s.qrcode}>
          <img onClick={() => setIsActive(true)} src={qrImg} alt='' />
          {/* <QRCode
            onClick={() => setIsActive(true)}
            style={{ height: 'auto', width: '100%' }}
            className={s.qrcode_img}
            viewBox={'0 0 100 100'}
            value={'https://pornhub.com'}
            
          /> */}
        </section>
        <ul className={s.data}>
          <li className={s.name}>
            <p className={s.table_title}>Name</p>
            <p className={s.table_value}>{storageValue.name ? storageValue.name : '-'}</p>
          </li>
          <li className={s.email}>
            <p className={s.table_title}>Email</p>
            <p className={s.table_value}>{storageValue.email}</p>
          </li>
          <li className={s.password}>
            <p className={s.table_title}>Passwort</p>
            <p className={s.table_value}>{storageValue.password}</p>
          </li>
        </ul>
        <button onClick={exit} className={s.exit}>Exit</button>
      </div>
    </div>
  );
};

export default Profile;
