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
import transDev from '../../../public/Logo_Transdev_Vulaines.png';
import dticket from '../../../public/D-Ticket_Logo_quer_farbig_RGB.png';
// import grayCart from '../../../public/photo_5197612956416860965_m.jpgF';

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
    <div className={s.profile}>
      <div className={s.container}>
        <header className={s.logos}>
          <div className={s.transdev}>
            <img src={transDev} alt='' />
          </div>
          <div className={s.dticket}>
            <img src={dticket} alt='' />
          </div>
        </header>
        <section className={s.first_info}>
          <h1 className={s.title}>Rechnurvempfänger</h1>
          <div className={s.sub_info}>
            <p>Klaus Seifert</p>
            <p>Piesberger Str. 78</p>
            <p>49090 Osnabrück</p>
          </div>
        </section>
        <section className={s.info_about_ticket}>
          <h1 className={s.title}>Deutschland-Ticket</h1>
          <div className={s.info}>
            <div className={s.grey_cart}>
              <div className={s.top}>
                <p className={s.info_title}>Gültigkeit:</p>
                <p className={` ${s.top_value} ${s.info_value}`}>bundesweit 01.07.2024 - 01.08.2024 03:00</p>
              </div>
              <div className={s.bottom}>
                <p className={`${s.bottom_title} ${s.info_title}`}>Ticketinhaber:in</p>
                <p className={`${s.bottom_value} ${s.info_value}`}>
                  Vomame: <span>{storageValue.name.split(' ')[0]} </span>
                </p>
                <p className={`${s.bottom_value} ${s.info_value}`}>
                  Nachname: <span>{storageValue.name.split(' ')[1]} </span>
                </p>
                <p className={`${s.bottom_value} ${s.info_value}`}>
                  Geburtsdatum: <span>{storageValue.dateBert} </span>
                </p>
              </div>
            </div>
            <div className={s.qrcode}>
              {localStorage.getItem('url') && <img src={localStorage.getItem('url') as string} alt='' />}
              <p>Barcode bitte nicht knicken!</p>
            </div>
          </div>
          <div className={s.payment_information}>
            <h1 className={s.title}>Zahlungsinformationen</h1>
            <ul className={s.list_info}>
              <li>
                <span className={s.list_info_left}>Ausstellungsdatum:</span>{' '}
                <span className={s.list_info_right}>01.07.2024 {storageValue.dateNow} Uhr</span>
              </li>
              <li>
                <span className={s.list_info_left}>Betrag:</span> <span className={s.list_info_right}>49,00 € inkl. 7 % MwSt. (3.20 €)</span>
              </li>
              <li>
                <span className={s.list_info_left}>Zahlungsart:</span> <span className={s.list_info_right}>SEPA-Einzug</span>
              </li>
              <li>
                <span className={s.list_info_left}>Bestellnummer:</span> <span className={s.list_info_right}>DTTDX1468305</span>
              </li>
              <li>
                <span className={s.list_info_left}>Ticketnummer:</span> <span className={s.list_info_right}>DT8YVuvd</span>
              </li>
            </ul>
          </div>
        </section>
        <section className={s.info_for_use}>
          <p className={s.info_use_title}>Wichtige Hinweisezurnutzung:</p>
          <ul className={s.info_list}>
            <li>• Ticket nur gültig in Verbindung mit einem amtlichen Lichtbildausweis. Dieser ist bei der Kontrolle</li>
            <li>• Ticket nicht übertragbar.</li>
            <li>
              • Es gelten die Tarife und Beförderungsbedingungen des genutzten Verkehrsunternehmens. Informationen dazu unter:
              <a href='https://deutschlandticket.de/legal/tariff' target='_blick'>
                https://deutschlandticket.de/legal/tariff
              </a>
            </li>
            <li>
              • Das hinterlegte Konto wird mit dem oben angegebenen Betrag belastet durch die Transdev Vertrieb GmbH (Markt 10, 04109 Leipzig,
              eingetragen am Amtsgercht Be DE 302 406 726). Der Vertrag für das Abonnement kommt mit der Transdev Verkehr GmbH zustande.
            </li>
            <li>
              • Gilt bundesweit im OPNV und SPNV aller teilnehmenden Verkehrsunternehmen, Landestarife und Verkehrsverbünde sowie im verbundfreien
              Raum. Nicht gültig im Fernverkehr, Flixbus/Flixtrain. Nicht übertragbar. Keine kostenfreie Mitnahme von Hunden und Fahrrader. Keine
              unentgeltliche Mitnahme von Personen ab o anren,
            </li>
          </ul>
          <p className={s.transdev}>Transdev Verkehr (Am Silberpalais 1, 47057 Duisburg)</p>
          <p className={s.mgt}>Geschäftsführer: Henrik Behrens, Ulf Braker, Hartmut Cyrkel, Christian Kleinenhammann, Erik Ryll, Heiko Schütte</p>
          <p className={s.mgt}>USt-ID-Nr.: DE 239929500</p>
        </section>
      </div>
      <button onClick={exit} className={s.exit}>
        Exit
      </button>
    </div>
  );
};

export default Profile;

// return (
//   <div className={s.profile}>
//     <div onClick={() => setIsActive(false)} className={`${isActive ? s.active_back : ''} ${s.back}`}>
//       <img src={qrImg} alt='' />

//       {/* <QRCode
//           onClick={() => setIsActive(true)}
//           style={{ height: '50%', width: '50%' }}
//           className={s.qrcode_img}
//           //   viewBox={'0 0 100 100'}
//           value={'https://pornhub.com'}
//         /> */}
//     </div>
//     <div className={s.container}>
//       <div className={s.logo}>
//         <img src={logoIMG} alt='' />
//       </div>
//       <h1 className={s.title}>Persönliche Daten</h1>
//       <p className={s.text}>Um interaktive Daten zu erhalten, klicken Sie auf die Schaltfläche „Ärtdem“.</p>
//       <section className={s.qrcode}>
//         <img onClick={() => setIsActive(true)} src={qrImg} alt='' />
//         {/* <div className={s.qr}> */}
//         {/* <QRCode
//               onClick={() => setIsActive(true)}
//               style={{ height: 'auto', width: '200px' }}
//               className={s.qrcode_img}
//               viewBox={'0 0 200 200'}
//               value={`{
//                   Name: ${storageValue.name},
// Geboren am: '01.02.032',
// Gültig von: '01.07.2024',
// Gültig bis: '01.08.2024',
// ausgestellt: '2024-06-10',
// ID: '101018658',
// Preis '49,00 €',
//                 }`}
//               // value={`https://de-bus-bahn.vercel.app/?i=${storageValue.name}&d=01.01.1985`}
//             /> */}
//         {/* </div> */}
//         <p className={s.price}>
//           <span>49</span>€
//         </p>
//       </section>
//       <ul className={s.data}>
//         <li className={s.name}>
//           <p className={s.table_title}>Ticket holder</p>
//           <p className={s.table_value}>
//             {/* {storageValue.gender} <span>{storageValue.name ? storageValue.name.split(' ')[0] : '-'}</span> */}
//             {storageValue.gender} <span>{storageValue.name}</span>
//           </p>
//         </li>
//         <li className={s.email}>
//           <p className={s.table_title}>Email</p>
//           <p className={s.table_value}>
//             {/* {storageValue.email.split('@')[0]}@{storageValue.email.split('@')[1][0]} */}
//             {storageValue.email}
//           </p>
//         </li>
//         <li className={s.password}>
//           <p className={s.table_title}>Passwort</p>
//           <p className={s.table_value}>{storageValue.password}</p>
//         </li>
//         <li className={s.dateborth}>
//           <p className={s.table_title}>Date of birth</p>
//           <p className={s.table_value}>{storageValue.dateBert}</p>
//         </li>
//         <li className={s.valid}>
//           <p className={s.table_title}>Valid</p>
//           <p className={s.table_value}>01/07/24, 00:00 until 01/08/2024, 03:00</p>
//         </li>
//         <li className={s.purchase}>
//           <p className={s.table_title}>Purchase date</p>
//           <p className={s.table_value}>TODAY {storageValue.dateNow}</p>
//         </li>
//         <li className={s.price_val}>
//           <p className={s.table_title}>Price</p>
//           <p className={s.table_value}>49.00€</p>
//         </li>
//         <li className={s.ticket_id}>
//           <p className={s.table_title}>Ticket ID</p>
//           <p className={s.table_value}>30680772461860436</p>
//         </li>
//         <li className={s.order_id}>
//           <p className={s.table_title}>Order ID</p>
//           <p className={s.table_value}>30680772461849983</p>
//         </li>
//         {/* <li className={s.klassr}>
//             <p className={s.table_title}>Klasse</p>
//             <p className={s.table_value}>2</p>
//           </li> */}
//         {/* <li className={s.ablauf}>
//             <p className={s.table_title}>Ablauf</p>
//             <p className={s.table_value}>01.06-30.06</p>
//           </li> */}
//       </ul>
//       <button onClick={exit} className={s.exit}>
//         Exit
//       </button>
//     </div>
//   </div>
// );
