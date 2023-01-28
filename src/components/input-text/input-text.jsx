/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./input-text.module.css";

function InputText({ children, className }) {
  return <p className={cn(style.text, className)}>{children}</p>;
}

InputText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default InputText;
