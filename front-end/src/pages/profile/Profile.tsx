// import QRCode from 'react-qr-code';
import s from './Profile.module.scss';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import useStorage from '../../hooks/useStorage';
import { RoutesName, StorageName } from '../../app/routing/Routing';
import qrImg from '../../../public/Снимок экрана 2024-07-01 114328.png';
import { useNavigate } from 'react-router';
import { removeUser } from '../../store/slices/userSlices/userSlice';
import { UserModel } from '../../types/user-model/UserModel';
import logoIMG from '../../../public/Group 11.svg';
// import QRCode from 'react-qr-code';

const Profile = () => {
  const [isActive, setIsActive] = useState(false);
  const selector = useAppSelector(state => state.userSlice);
  const { storageValue }: { storageValue: UserModel } = useStorage(StorageName.UserData, selector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const exit = () => {
    dispatch(removeUser());
    localStorage.removeItem(StorageName.UserData);
    navigate(RoutesName.admin, { replace: true });
  };

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
        <div className={s.logo}>
          <img src={logoIMG} alt='' />
        </div>
        <h1 className={s.title}>Persönliche Daten</h1>
        <p className={s.text}>Um interaktive Daten zu erhalten, klicken Sie auf die Schaltfläche „Ärtdem“.</p>
        <section className={s.qrcode}>
          <img onClick={() => setIsActive(true)} src={qrImg} alt='' />
          {/* <div className={s.qr}> */}
          {/* <QRCode
              onClick={() => setIsActive(true)}
              style={{ height: 'auto', width: '200px' }}
              className={s.qrcode_img}
              viewBox={'0 0 200 200'}
              value={`{
                  Name: ${storageValue.name},
Geboren am: '01.02.032',
Gültig von: '01.07.2024',
Gültig bis: '01.08.2024',
ausgestellt: '2024-06-10',
ID: '101018658',
Preis '49,00 €',
                }`}
              // value={`https://de-bus-bahn.vercel.app/?i=${storageValue.name}&d=01.01.1985`}
            /> */}
          {/* </div> */}
          <p className={s.price}>
            <span>49</span>€
          </p>
        </section>
        <ul className={s.data}>
          <li className={s.name}>
            <p className={s.table_title}>Ticket holder</p>
            <p className={s.table_value}>
              {/* {storageValue.gender} <span>{storageValue.name ? storageValue.name.split(' ')[0] : '-'}</span> */}
              {storageValue.gender} <span>{storageValue.name}</span>
            </p>
          </li>
          <li className={s.email}>
            <p className={s.table_title}>Email</p>
            <p className={s.table_value}>
              {/* {storageValue.email.split('@')[0]}@{storageValue.email.split('@')[1][0]} */}
              {storageValue.email}
            </p>
          </li>
          <li className={s.password}>
            <p className={s.table_title}>Passwort</p>
            <p className={s.table_value}>{storageValue.password}</p>
          </li>
          <li className={s.dateborth}>
            <p className={s.table_title}>Date of birth</p>
            <p className={s.table_value}>{storageValue.dateBert}</p>
          </li>
          <li className={s.valid}>
            <p className={s.table_title}>Valid</p>
            <p className={s.table_value}>01/07/24, 00:00 until 01/08/2024, 03:00</p>
          </li>
          <li className={s.purchase}>
            <p className={s.table_title}>Purchase date</p>
            <p className={s.table_value}>TODAY {storageValue.dateNow}</p>
          </li>
          <li className={s.price_val}>
            <p className={s.table_title}>Price</p>
            <p className={s.table_value}>49.00€</p>
          </li>
          <li className={s.ticket_id}>
            <p className={s.table_title}>Ticket ID</p>
            <p className={s.table_value}>30680772461860436</p>
          </li>
          <li className={s.order_id}>
            <p className={s.table_title}>Order ID</p>
            <p className={s.table_value}>30680772461849983</p>
          </li>
          {/* <li className={s.klassr}>
            <p className={s.table_title}>Klasse</p>
            <p className={s.table_value}>2</p>
          </li> */}
          {/* <li className={s.ablauf}>
            <p className={s.table_title}>Ablauf</p>
            <p className={s.table_value}>01.06-30.06</p>
          </li> */}
        </ul>
        <button onClick={exit} className={s.exit}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default Profile;
