/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import { useState } from "react";
import style from "./password-input.module.css";

function PasswordInput({ htmlFor, placeholder }) {
  const [showPassword, setShowPassword] = useState(true);

  function togglePassword() {
    setShowPassword((prevValue) => !prevValue);
  }

  return (
    <div className={style.input}>
      <input
        id={htmlFor}
        type="text"
        placeholder={placeholder}
        className={style.input__element}
      />
      <button
        className={`${style.input__button} ${
          showPassword ? style.input__button_close : style.input__button_open
        }`}
        type="button"
        onClick={() => togglePassword()}
      ></button>
    </div>
  );
}

PasswordInput.propTypes = {
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string,
};

export default PasswordInput;
