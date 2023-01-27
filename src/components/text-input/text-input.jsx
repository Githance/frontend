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
}) {
  return (
    <input
      id={htmlFor}
      type="text"
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

TextInput.propTypes = {
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  register: PropTypes.func,
  minLength: PropTypes.objectOf(PropTypes.number, PropTypes.string),
  maxLength: PropTypes.objectOf(PropTypes.number, PropTypes.string),
  pattern: PropTypes.objectOf(PropTypes.string, PropTypes.string),
};

export default TextInput;
