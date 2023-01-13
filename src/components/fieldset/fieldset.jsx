import PropTypes from "prop-types";
import cn from "classnames";
import style from "./fieldset.module.css";

// eslint-disable-next-line react/prop-types
function Fieldset({ type, required, label, name, className }) {
  return (
    <fieldset className={style.fieldset}>
      <div className={cn(style.label, style.label__container, className)}>
        <label htmlFor={name} className={style.label__text}>
          {label} {required && <span className={style.required_tag}>*</span>}
        </label>
      </div>
      <input
        id={name}
        type={type}
        required={required}
        className={style.input}
      />
      <span className={cn(style.text)}>Error text</span>
    </fieldset>
  );
}

Fieldset.propTypes = {
  type: PropTypes.string.isRequired,
  required: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Fieldset;
