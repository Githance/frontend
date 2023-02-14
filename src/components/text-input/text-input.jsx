/* eslint-disable react/forbid-prop-types */
/* eslint-disable object-shorthand */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./text-input.module.css";

function TextInput({
  htmlFor,
  placeholder,
  name,
  className,
  errorClassName,
  onChange,
}) {
  return (
    <input
      id={htmlFor}
      name={name}
      type="text"
      placeholder={placeholder}
      className={cn(style.input, className, errorClassName)}
      onChange={onChange}
    />
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  errorClassName: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default TextInput;
