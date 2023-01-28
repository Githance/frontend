/* eslint-disable react/forbid-prop-types */
/* eslint-disable object-shorthand */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./text-input.module.css";

function TextInput({
  register,
  minLength,
  maxLength,
  pattern,
  htmlFor,
  placeholder,
  className,
  errorClassName
}) {
  
  return (
    <input
      id={htmlFor}
      type="text"
      placeholder={placeholder}
      className={cn(style.input, className, errorClassName)}
      {...register(htmlFor, {
        required: "Заполни меня",
        minLength: minLength,
        maxLength: maxLength,
        pattern: pattern,
      })}
    />
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  errorClassName: PropTypes.string,
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

export default TextInput;
