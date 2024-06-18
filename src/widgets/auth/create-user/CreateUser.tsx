import s from './CreateUser.module.scss';
import formS from '../Form.module.scss';
import Input from '../input/Input';

const CreateUser = () => {
  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <form className={`${formS.form} ${s.login}`}>
      <p className={formS.title}>Angaben zur Person</p>
      <Input classNameCont={formS.cont} placeholder='chlenoder228' inputHandle={inputHandle} topText='Login*' />
      <Input classNameCont={formS.cont} placeholder='chlenoder2010_ultrasperma228' inputHandle={inputHandle} topText='Password*' />
    </form>
  );
};

export default CreateUser;
