/* eslint-disable react/forbid-prop-types */
/* eslint-disable object-shorthand */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./email-input.module.css";

function EmailInput({  
  htmlFor,
  placeholder,
  className,
  errorClassName
}) {  

  return (
    <input
      id={htmlFor}
      type="email"
      placeholder={placeholder}
      className={cn(style.input, className, errorClassName)}      
    />
  );
}

EmailInput.propTypes = {
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  errorClassName: PropTypes.string,  
};

export default EmailInput;
