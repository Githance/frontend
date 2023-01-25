/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./input-label.module.css";

function InputLabel({ label, htmlFor, className, required }) {
  return (
    label && (
      <label htmlFor={htmlFor} className={cn(style.label, className)}>
        {label} {required && <span className={style.tag}>*</span>}
      </label>
    )
  );
}

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default InputLabel;
