import s from './LogIn.module.scss';
import formS from '../Form.module.scss';
import Input from '../input/Input';
import axios from 'axios';

const LogIn = () => {
  const formHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    await axios
      .post('http://localhost:8000/login', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={formHandler} className={`${formS.form} ${s.login}`}>
      <p className={formS.title}>Angaben zur Person</p>
      <Input name='email' classNameCont={formS.cont} placeholder='spermoglot@gmail.com' topText='Email*' />
      <Input name='password' classNameCont={formS.cont} placeholder='chlenoder2010_ultrasperma228' topText='Password*' />
      <button className={formS.btn}>Login</button>
    </form>
  );
};

export default LogIn;

/*
  ? User Model
  username String?
  first_name String?
  last_name String?
  guilty String?
  class Int
  login String?
  password String?
*/
