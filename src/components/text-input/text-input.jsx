/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";

import style from "./text-input.module.css";

function TextInput({ htmlFor, placeholder }) {
  return (
    <input
      id={htmlFor}
      type="text"
      placeholder={placeholder}
      className={style.input}
    />
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string,
};

export default TextInput;
