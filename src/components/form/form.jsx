/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./form.module.css";

function Form({ children, className, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(style.form, className)}
      noValidate
    >
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),  
};

export default Form;
