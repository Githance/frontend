/* eslint-disable react/self-closing-comp */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import cn from "classnames";
import Form from "../../components/form/form";
import FormTitle from "../../components/form-title/form-title";
import InputLabel from "../../components/input-label/input-label";
import EmailInput from "../../components/email-input/email-input";
import PasswordInput from "../../components/password-input/password-input";
import InputErrorText from "../../components/input-error-text/input-error-text";
import Button from "../../components/button/button";
import style from "./authentication-page.module.css";
import oauthSignIn from "../../utils/google-request";
import { fetchGoogleDate } from "../../services/slice/user-auth-slice";
import useForm from "../../hooks/useForm";

function AuthenticationPage() {
  const dispatch = useDispatch();
  const [searchCode] = useSearchParams();
  const { onFormChange, form, isValid } = useForm({ email: "", password: "" });

  console.log(isValid);

  console.log(form);

  useEffect(() => {
    const code = searchCode.get("code");
    if (code) {
      dispatch(fetchGoogleDate(code));
    }
  }, []);

  const handleGoogleSubmit = () => {
    oauthSignIn();
  };

  const handleFormSubmit = () => {
    alert("Привет");
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <FormTitle className={style.title}>Вход</FormTitle>
        <Form onSubmit={handleFormSubmit}>
          <fieldset className={style.fieldset}>
            <InputLabel htmlFor="email">Электронная почта</InputLabel>
            <EmailInput
              className={style.input}
              htmlFor="email"
              name="email"
              onChange={(e) => onFormChange(e)}
            />
            {false && <InputErrorText>Text</InputErrorText>}
          </fieldset>
          <fieldset className={style.fieldset}>
            <div className={style.container__password}>
              <InputLabel htmlFor="password">Пароль</InputLabel>
              <Link className={style.link} to="/register">
                Забыли пароль?
              </Link>
            </div>
            <PasswordInput
              className={style.input}
              htmlFor="password"
              name="password"
              onChange={(e) => onFormChange(e)}
            />
            {false && <InputErrorText>Text</InputErrorText>}
          </fieldset>
          <fieldset className={cn(style.fieldset, style.container__buttons)}>
            <Button
              className={`${style.button} ${
                false ? style.button__main : style.button__main_noValid
              }`}
              type="submit"
              isValid={false}
            >
              Войти
            </Button>
            <p className={style.text}>или</p>
          </fieldset>
        </Form>
        <Button
          isValid
          className={cn(style.button, style.button__google)}
          type="button"
          onClick={handleGoogleSubmit}
        >
          <span className={style.icon}></span>
          Войти через Google
        </Button>
        <div className={style.container__text}>
          <p className={style.text}>Нет аккаунта?</p>
          <Link className={style.link} to="/register">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationPage;
