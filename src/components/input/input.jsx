/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import style from "./input.module.css";

function Input({
  type,
  htmlFor,
  placeholder,
  button,
  togglePassword,
  showPassword,
}) {
  return (
    <div className={style.input}>
      <input
        id={htmlFor}
        type={type}
        placeholder={placeholder}
        className={style.input__element}
      />
      {button && (
        <button
          className={`${style.input__button} ${
            showPassword ? style.input__button_close : style.input__button_open
          }`}
          type="button"
          onClick={() => togglePassword()}
        ></button>
      )}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string,
  button: PropTypes.bool,
  togglePassword: PropTypes.func,
  showPassword: PropTypes.bool,
};

export default Input;
