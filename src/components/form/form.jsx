import PropTypes from "prop-types";
import style from "./form.module.css";

function Form({ children }) {
  return <form className={style.form}>{children}</form>;
}

Form.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Form;
