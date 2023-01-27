/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames"
import style from "./text-input.module.css";

function TextInput({ htmlFor, placeholder, className }) {
  return (
    <input
      id={htmlFor}
      type="text"
      placeholder={placeholder}
      className={cn(style.input, className)}
    />
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

export default TextInput;
