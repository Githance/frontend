/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./form.module.css";

function Form({ children, className, onSubmit, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(style.form, className)}
      noValidate
    >
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  handleSubmit: PropTypes.func,
};

export default Form;
