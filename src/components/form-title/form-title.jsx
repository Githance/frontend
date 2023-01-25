/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./form-title.module.css";

function FormTitle({ children, className }) {
  return <p className={cn(style.title, className)}>{children}</p>;
}

FormTitle.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default FormTitle;
