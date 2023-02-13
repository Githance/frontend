/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
/* eslint-disable object-shorthand */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames";
import { useState } from "react";
import style from "./password-input.module.css";

function PasswordInput({  
  htmlFor,
  placeholder,
  className,
  errorClassName
}) {
  
  const [showPassword, setShowPassword] = useState(true);

  function togglePassword() {
    setShowPassword((prevValue) => !prevValue);
  }

  return (
    <div className={cn(style.input, className)}>
      <input
        id={htmlFor}
        type={showPassword ? "password" : "text"}
        placeholder={placeholder}
        className={cn(style.input__element, errorClassName)}
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
  className: PropTypes.string,
  errorClassName: PropTypes.string, 
};

export default PasswordInput;
