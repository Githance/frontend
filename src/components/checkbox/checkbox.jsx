/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
import style from './checkbox.module.css';

function CheckBox({ register }) {
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
}

export default CheckBox;
