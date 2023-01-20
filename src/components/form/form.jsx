/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import style from "./form.module.css";

function Form({ children, handleSubmit, onSubmit }) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form} noValidate>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Form;
