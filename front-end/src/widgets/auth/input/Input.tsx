import { useState } from 'react';
import s from './Input.module.scss';

type Props = {
  classNameInput?: string;
  classNameCont?: string;
  placeholder?: string;
  inputHandle?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  topText?: string;
  options?: string[];
  activeOption?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ activeOption, options, placeholder, classNameInput, classNameCont, inputHandle, type = 'text', name, topText }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('Herr');

  const changeSelected = (it: string) => {
    setSelected(it);
    setIsActive(false);
  };

  return (
    <div className={`${classNameCont} ${s.cont}`}>
      {topText && <p>{topText}</p>}
      {options ? (
        <div className={s.option_container}>
          <div onClick={() => setIsActive(prev => !prev)} className={s.label}></div>
          <input value={selected} placeholder={placeholder} type={type} name={name} className={`${s.input} ${classNameInput}`} />
          <ul className={`${isActive ? s.active_options : ''} ${s.options}`}>
            {options.map((item, index) => (
              <li onClick={() => changeSelected(item)} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <input onInput={inputHandle} placeholder={placeholder} type={type} name={name} className={`${s.input} ${classNameInput}`} />
      )}
    </div>
  );
};

export default Input;
