/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
import { Link } from "react-router-dom";
import cn from "classnames";
import Form from "../../components/form/form";
import FormTitle from "../../components/form-title/form-title";
import InputLabel from "../../components/input-label/input-label";
import TextInput from "../../components/text-input/text-input";
import EmailInput from "../../components/email-input/email-input";
import PasswordInput from "../../components/password-input/password-input";
import InputErrorText from "../../components/input-error-text/input-error-text";
import InputText from "../../components/input-text/input-text";
import Button from "../../components/button/button";
import CheckBox from "../../components/checkbox/checkbox";
import style from "./registration-page.module.css";

function RegistrationPage() { 
  const handleFormSubmit = () => {
    alert("Привет")
  } 

  return (
    <div className={style.container}>
      <div className={style.content}>
        <FormTitle className={style.title}>Регистрация</FormTitle>
        <Form onSubmit={handleFormSubmit}>
          <fieldset className={style.fieldset}>
            <InputLabel htmlFor="user" className={style.label} required>
              Имя пользователя
            </InputLabel>
            <TextInput              
              className={style.input}              
              htmlFor="user"              
            />
            {false && (
              <InputErrorText>Text</InputErrorText>
            )}
          </fieldset>
          <fieldset className={cn(style.fieldset, style.container__email)}>
            <InputLabel htmlFor="email" required>
              Электронная почта
            </InputLabel>
            <EmailInput              
              className={style.input}              
              htmlFor="email"              
            />
            {false && (
              <InputErrorText>Text</InputErrorText>
            )}
          </fieldset>
          <fieldset className={cn(style.fieldset, style.container__password)}>
            <InputLabel htmlFor="password" required>
              Пароль
            </InputLabel>
            <PasswordInput              
              className={style.input}              
              htmlFor="password"              
            />
            {false ? (
              <InputErrorText>Text</InputErrorText>
            ) : (
              <InputText>
                Минимум 8 символов, должен включать цифры и буквы
              </InputText>
            )}
          </fieldset>
          <div className={style.agreement}>
            <CheckBox />
            <p className={style.agreement__text}>
              Согласен с
              <a className={style.agreement__link} href="#">
                условиями пользования
              </a>
              платформой Githance и&nbsp;условиями обработки персональных данных
              на условиях, определенных
              <a className={style.agreement__link} href="#">
                Политикой конфиденциальности
              </a>
            </p>
          </div>
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
        >
          <span className={style.icon}></span>
          Войти через Google
        </Button>
        <div className={style.container__text}>
          <p className={style.text}>Уже зарегистрированы? </p>
          <Link className={style.link} to="/auth">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
