/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./fieldset.module.css";

function Fieldset({
  type,
  required,
  label,
  name,
  className,
  button,
  togglePassword,
  showPassword,
}) {
  return (
    <fieldset className={style.fieldset}>
      <div className={cn(style.label, style.label__container, className)}>
        <label htmlFor={name} className={style.label__text}>
          {label} {required && <span className={style.tag}>*</span>}
        </label>
      </div>
      <div className={cn(style.input, style.input__container)}>
        <input
          id={name}
          type={type}
          required={required}
          className={style.input__element}
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
      <span className={cn(style.text)}>Error text</span>
    </fieldset>
  );
}

Fieldset.propTypes = {
  type: PropTypes.string.isRequired,
  required: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  button: PropTypes.bool,
  showPassword: PropTypes.bool,
  togglePassword: PropTypes.func,
};

export default Fieldset;
