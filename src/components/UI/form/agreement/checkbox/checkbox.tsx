import { FC } from 'react';
import style from './checkbox.module.css';

type Props = {
  register: any;
};

const Checkbox: FC<Props> = ({ register }) => {
  return (
    <label htmlFor="checkbox">
      <input
        className={style.real}
        type="checkbox"
        name="checkbox"
        id="checkbox"
        {...register('checkbox', { required: 'Заполни меня' })}
      />
      <span className={style.custom}></span>
    </label>
  );
};

export default Checkbox;
