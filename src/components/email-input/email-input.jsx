/* eslint-disable react/forbid-prop-types */
/* eslint-disable object-shorthand */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./email-input.module.css";

function EmailInput({
  register,
  minLength,
  maxLength,
  pattern,
  htmlFor,
  name,
  placeholder,
  className,
  errorClassName,
  onChange,
}) {
  return (
    <input
      autoComplete="on"
      id={htmlFor}
      name={name}
      type="email"
      placeholder={placeholder}
      className={cn(style.input, className, errorClassName)}
      onChange={onChange}
      {...register(htmlFor, {
        required: "Заполни меня",
        minLength: minLength,
        maxLength: maxLength,
        pattern: pattern,
      })}
    />
  );
}

EmailInput.propTypes = {
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  errorClassName: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  register: PropTypes.func,
  minLength: PropTypes.shape({
    value: PropTypes.number,
    message: PropTypes.string,
  }),
  maxLength: PropTypes.shape({
    value: PropTypes.number,
    message: PropTypes.string,
  }),
  pattern: PropTypes.shape({
    value: PropTypes.any,
    message: PropTypes.string,
  }),
};

export default EmailInput;
