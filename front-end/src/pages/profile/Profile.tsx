// import QRCode from 'react-qr-code';
import s from './Profile.module.scss';
// import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import useStorage from '../../hooks/useStorage';
import { RoutesName, StorageName } from '../../app/routing/Routing';
// import qrImg from '../../../public/Снимок экрана 2024-07-02 183409.png';
import { useNavigate } from 'react-router';
import { removeUser } from '../../store/slices/userSlices/userSlice';
import { UserModel } from '../../types/user-model/UserModel';
// import logoIMG from '../../../public/Group 11.svg';
// import QRCode from 'react-qr-code';
// import transDev from '../../../public/Logo_Transdev_Vulaines.png';
// import dticket from '../../../public/D-Ticket_Logo_quer_farbig_RGB.png';
// import grayCart from '../../../public/photo_5197612956416860965_m.jpgF';
import vrrImg from '../../../public/vrr.png';
import eTicketImg from '../../../public/ETicket_Logo.svg';
import qrImg from '../../../public/image copy.png';
import clock from '../../../public/icons8-часы-96.png';

const Profile = () => {
  // const [isActive, setIsActive] = useState(false);
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
    <div className={s['profile']}>
      <div className={s['profile-container']}>
        <header className={s['profile-header']}>
          <p>Deutschlandticket</p>
        </header>
        <div className={s['profile-body']}>
          <div className={s['logos']}>
            <img src={eTicketImg} alt='' />
            <img src={vrrImg} alt='' />
          </div>
          <div className={s['profile-qr']}>
            <img src={qrImg} alt='' />
          </div>
          <div className={s['profile-code']}>
            <p>4098314859</p>
            <div className={s['interaction']}></div>
          </div>
        </div>
        <div className={s['profile-info']}>
          <div className={`${s['block']}`}>
            <div className={s['img-clock']}>
              <img src={clock} alt='' />
            </div>
            <ul className={s['table']}>
              <li>
                <p className={s['name']}>Gültig von:</p>
                <p className={s['value']}>01.08.2024 - 00:00</p>
              </li>
              <li>
                <p className={s['name']}>Gültig bis:</p>
                <p className={s['value']}>31.08.2024 - 23:59</p>
              </li>
              <li>
                <p className={s['name']}>Geltungsbereich:</p>
                <p className={s['value']}>Deutschlandweit</p>
              </li>
              <li>
                <p className={s['name']}>Klasse:</p>
                <p className={s['value']}>2. Klasse</p>
              </li>
            </ul>
          </div>
          <div className={`${s['block']}`}>
            <div className={s['imgs']}>
              <div className={s['img-clock']}>
                <img src={clock} alt='' />
              </div>
              <div className={s['img-clock']}>
                <img src={clock} alt='' />
              </div>
            </div>
            <ul className={s['table']}>
              <li>
                <p className={s['name']}>Ticketinhaber*in:</p>
                <p className={s['value']}>Victor Cuzmin</p>
              </li>
              <li>
                <p className={s['name']}>Geburtsdatum:</p>
                <p className={s['value']}>16.01.2004</p>
              </li>
            </ul>
          </div>
          <div className={`${s['last-text']} ${s.block}`}>
            Gilt bundesweit für beliebig viele Fahrten in allen Nahverkehrszügen, Verkehrsverbünden und teilnehmenden Verkehrsunternehmen. Nicht
            übertragbar, Umtausch und Erstattung des Tickets sind ausgeschlossen.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
