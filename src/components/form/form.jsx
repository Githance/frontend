import PropTypes from "prop-types";
import style from "./form.module.css";

function Form({ children }) {
  return (
    <form className={style.form} noValidate>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Form;
