import s from './Input.module.scss';

type Props = {
  classNameInput?: string;
  classNameCont?:string; 
  placeholder?: string;
  inputHandle?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  topText?: string;
};

const Input = ({ placeholder, classNameInput, classNameCont, inputHandle, type = 'text', name, topText }: Props) => {
  return (
    <div className={`${classNameCont} ${s.cont}`}>
      {topText && <p>{topText}</p>}
      <input onInput={inputHandle} placeholder={placeholder} type={type} name={name} className={`${s.input} ${classNameInput}`} />
    </div>
  );
};

export default Input;
