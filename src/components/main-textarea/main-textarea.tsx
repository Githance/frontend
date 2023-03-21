import { FC } from 'react';
import style from './main-textarea.module.css';
import Button from '../button/button';

const MainTextarea: FC = () => {
  return (
    <form className={style.form}>
      <fieldset className={style.fieldset}>
        <textarea cols={30} rows={10}></textarea>
        <Button type="submit" isValid>
          Сохранить
        </Button>
      </fieldset>
    </form>
  );
};

export default MainTextarea;
