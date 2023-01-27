/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./input-label.module.css";

function InputLabel({ children, htmlFor, className, required }) {
  return (
    children && (
      <label htmlFor={htmlFor} className={cn(style.label, className)}>
        {children} {required && <span className={style.tag}>*</span>}
      </label>
    )
  );
}

InputLabel.propTypes = {
  children: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default InputLabel;
