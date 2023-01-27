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
  placeholder,
  className,
}) {
  return (
    <input
      id={htmlFor}
      type="email"
      placeholder={placeholder}
      className={cn(style.input, className)}
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
  register: PropTypes.func,
  minLength: PropTypes.objectOf(PropTypes.number, PropTypes.string),
  maxLength: PropTypes.objectOf(PropTypes.number, PropTypes.string),
  pattern: PropTypes.objectOf(PropTypes.string, PropTypes.string),
};

export default EmailInput;
