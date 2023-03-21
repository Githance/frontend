import { FC, ReactNode } from 'react';
import cn from 'classnames';
import style from './main-textarea.module.css';
import Button from '../button/button';

type Props = {
  isValid: boolean;
  children: ReactNode;
  onChange: () => void;
  onSubmit: () => void;
};

const MainTextarea: FC<Props> = ({ isValid, children, onChange, onSubmit }) => {
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <fieldset className={style.fieldset}>
        <textarea className={style.textarea} onChange={onChange}>
          {children}
        </textarea>
        <Button
          type="submit"
          isValid={isValid}
          className={cn(style.button, isValid ? style.button__main : style.button__main_noValid)}
        >
          Сохранить
        </Button>
      </fieldset>
    </form>
  );
};

export default MainTextarea;
