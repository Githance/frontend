/* eslint-disable react/require-default-props */
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import Button from "../../../components/button/button";
import InputErrorText from "../../../components/input-error-text/input-error-text";
import style from "./button-fieldset-auth.module.css";
import {  
  getLoginErrorText,
} from "../../../services/selectors/selectors";

function ButtonFieldsetAuth({ isValid }) {  
  const loginErrorText = useSelector(getLoginErrorText);
  return (
    <fieldset className={cn(style.fieldset, style.container__buttons)}>
      {loginErrorText && (
        <InputErrorText className={style.error}>{loginErrorText.non_field_errors}</InputErrorText>
      )}
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
