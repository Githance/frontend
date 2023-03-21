import { FC, FormEvent } from 'react';
import cn from 'classnames';
import style from './main-textarea.module.css';
import Button from '../button/button';

type Props = {
  isValid: boolean;
  about: string;
  onChange?: () => void;
  onSubmit?: (e: FormEvent) => void;
};

const MainTextarea: FC<Props> = ({ isValid, about, onChange, onSubmit }) => {
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <label htmlFor="textarea" className={style.label}>
        О себе <span className={style.label_color_grey}>(максимум 1000 символов)</span>
      </label>
      <fieldset id="textarea" className={style.fieldset}>
        <textarea className={style.textarea} onChange={onChange}>
          {about}
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
