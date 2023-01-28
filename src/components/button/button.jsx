/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./button.module.css";

function Button({ type, isValid, className, children, onClick }) {
  return (
    <button
      disabled={!isValid}
      className={cn(style.button, className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  onClick: PropTypes.func,
};

export default Button;
