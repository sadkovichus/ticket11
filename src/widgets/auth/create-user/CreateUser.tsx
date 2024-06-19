import s from './CreateUser.module.scss';
import formS from '../Form.module.scss';
import Input from '../input/Input';
import axios from 'axios';
import { useState } from 'react';

const CreateUser = () => {
  const [loading, setLoading] = useState(false);

  const formHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return false;
    setLoading(true);
    const data = await Object.fromEntries(new FormData(e.currentTarget));
    await axios
      .post('http://localhost:8000/admin', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <form onSubmit={formHandler} className={`${formS.form} ${s.login}`}>
      <p className={formS.title}>Angaben zur Person</p>
      <Input name='name' classNameCont={formS.cont} placeholder='Chlenoder' topText='User Name' />
      <Input name='email' classNameCont={formS.cont} placeholder='spermoglot@gmail.com' topText='Email*' />
      <Input name='password' classNameCont={formS.cont} placeholder='chlenoder2010_ultrasperma228' topText='Password*' />
      <button className={formS.btn}>{loading ? 'Loading...' : 'Registrieren'}</button>
    </form>
  );
};

export default CreateUser;
