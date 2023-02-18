/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import cn from "classnames";
import Button from "../../../components/button/button";
import style from "./button-fieldset-auth.module.css";

function ButtonFieldsetAuth({ isValid }) {
  return (
    <fieldset className={cn(style.fieldset, style.container__buttons)}>
      <Button
        className={`${style.button} ${
          isValid ? style.button__main : style.button__main_noValid
        }`}
        type="submit"
        isValid={isValid}
      >
        Войти
      </Button>
      <p className={style.text}>или</p>
    </fieldset>
  );
}

ButtonFieldsetAuth.propTypes = {
  isValid: PropTypes.bool,
};

export default ButtonFieldsetAuth;
