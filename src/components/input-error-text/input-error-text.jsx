import PropTypes from "prop-types";
import style from "./input-error-text.module.css";

function InputErrorText({ children }) {
  return <p className={style.text}>{children}</p>;
}

InputErrorText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default InputErrorText;
