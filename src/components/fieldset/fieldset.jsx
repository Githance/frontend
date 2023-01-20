/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import style from "./fieldset.module.css";

function Fieldset({
  type,
  required,
  label,
  name,
  className,
  button,
  hint,
  hintText,
  linkPage,
  linkText,
  togglePassword,
  showPassword,
  register,
}) {
  return (
    <fieldset className={style.fieldset}>
      <div className={cn(style.label, style.label__container, className)}>
        <label htmlFor={name} className={style.label__text}>
          {label} {required && <span className={style.tag}>*</span>}
        </label>
        {linkPage && (
          <NavLink to={linkPage} className={style.link}>
            {linkText}
          </NavLink>
        )}
      </div>
      <div className={cn(style.input, style.input__container)}>
        <input
          id={name}
          type={type}
          className={style.input__element}
          {...register(name)}
        />
        {button && (
          <button
            className={`${style.input__button} ${
              showPassword
                ? style.input__button_close
                : style.input__button_open
            }`}
            type="button"
            onClick={() => togglePassword()}
          ></button>
        )}
      </div>
      {false ? (
        <span className={cn(style.text, style.text_error)}>Error text</span>
      ) : (
        hint && <span className={style.text}>{hintText}</span>
      )}
    </fieldset>
  );
}

Fieldset.propTypes = {
  type: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  hintText: PropTypes.string,
  button: PropTypes.bool,
  hint: PropTypes.bool,
  showPassword: PropTypes.bool,
  togglePassword: PropTypes.func,
};

export default Fieldset;
