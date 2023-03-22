import { useState, useEffect, useCallback, useRef, ReactNode, FC, FormEvent } from 'react';
import cn from 'classnames';
import style from './main-link.module.css';
import { AnchorIcon, CheckIcon } from '../UI';

type Props = {
  link: string;
  children: ReactNode;
  onChange?: () => void;
  onSubmit?: (e: FormEvent) => void;
  type: string;
};

const MainLink: FC<Props> = ({ link, children, onChange, onSubmit, type }) => {
  const [disabledInput, setDisabledInput] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const inputType = (type: string) => {
    return type === 'primary' ? true : false;
  };

  const changeInput = useCallback(() => {
    console.log('change');
    setDisabledInput((prevValue) => !prevValue);
  }, []);

  const blurInput = useCallback(() => {
    console.log('blur');
    setDisabledInput((prevValue) => !prevValue);
  }, []);

  useEffect(() => {
    if (!disabledInput && inputRef && inputRef.current) {
      console.log('focus');
      inputRef.current.focus();
    }
  }, [disabledInput]);

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <fieldset className={style.fieldset}>
        {disabledInput ? (
          <a href={link} className={cn(style.link, !!link && style.link_active)}>
            {children}
          </a>
        ) : (
          <input
            type="text"
            value={link}
            className={style.input}
            ref={inputRef}
            onChange={onChange}
            onBlur={blurInput}
          />
        )}
        {disabledInput ? (
          <button type="button" className={style.button} onClick={changeInput}>
            <AnchorIcon size="small" />
          </button>
        ) : (
          <button type="submit" className={style.button}>
            <CheckIcon size="small" />
          </button>
        )}
      </fieldset>
    </form>
  );
};

export default MainLink;
