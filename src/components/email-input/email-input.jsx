/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames"
import style from "./email-input.module.css";

function EmailInput({ htmlFor, placeholder, className }) {
  return (
    <input
      id={htmlFor}
      type="email"
      placeholder={placeholder}
      className={cn(style.input, className)}
    />
  );
}

EmailInput.propTypes = {
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

export default EmailInput;
