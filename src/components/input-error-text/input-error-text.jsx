/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./input-error-text.module.css";

function InputErrorText({ children, className }) {
  return <p className={cn(style.text, className)}>{children}</p>;
}

InputErrorText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default InputErrorText;
