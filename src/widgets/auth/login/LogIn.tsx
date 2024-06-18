import s from './LogIn.module.scss';
import formS from '../Form.module.scss';
import Input from '../input/Input';

const LogIn = () => {
  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <form className={`${formS.form} ${s.login}`}>
      <p className={formS.title}>Angaben zur Person</p>
      <Input classNameCont={formS.cont} placeholder='Chlenoder' inputHandle={inputHandle} topText='User Name' />
      <Input classNameCont={formS.cont} placeholder='Chleno' inputHandle={inputHandle} topText='First Name' />
      <Input classNameCont={formS.cont} placeholder='Der' inputHandle={inputHandle} topText='Last Name' />
      <Input classNameCont={formS.cont} placeholder='guilty' inputHandle={inputHandle} topText='Guilty*' />
      <Input classNameCont={formS.cont} placeholder='5 A' inputHandle={inputHandle} topText='Class*' />
      <Input classNameCont={formS.cont} placeholder='chlenoder228' inputHandle={inputHandle} topText='Login*' />
      <Input classNameCont={formS.cont} placeholder='chlenoder2010_ultrasperma228' inputHandle={inputHandle} topText='Password*' />
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
