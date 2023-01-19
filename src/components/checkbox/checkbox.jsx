/* eslint-disable react/self-closing-comp */
import style from "./checkbox.module.css";

function CheckBox() {
  return (
    <label htmlFor="checkbox">
      <input
        className={style.real}
        type="checkbox"
        name="checkbox"
        id="checkbox"
      />
      <span className={style.custom}></span>
    </label>
  );
}

export default CheckBox;
