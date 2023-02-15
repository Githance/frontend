/* eslint-disable react/self-closing-comp */
/* import { useEffect } from "react"; */
import { useDispatch } from "react-redux";
import { Link, /* useNavigate */ } from "react-router-dom";
import { useForm } from "react-hook-form";
import cn from "classnames";
import Form from "../../components/form/form";
import FormTitle from "../../components/form-title/form-title";
import TextFieldsetRegister from "./text-fieldset-register/text-fieldset-register";
import EmailFieldsetRegister from "./email-fieldset-register/email-fieldset-register";
import PasswordFieldsetRegister from "./password-fieldset-register/password-fieldset-register";
import AgreementRegister from "./agreement-register/agreement-register";
import ButtonFieldsetRegister from "./button-fieldset-register/button-fieldset-register";
import Button from "../../components/button/button";
import style from "./registration-page.module.css";
import { registerUser } from "../../services/slice/user-auth-slice";
import oauthSignIn from "../../utils/google-request";

function RegistrationPage() {
  const dispatch = useDispatch();
  /* const navigate = useNavigate(); */
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { name: "", email: "", password: "" },
  });

  const handleGoogleSubmit = () => {
    oauthSignIn();
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(registerUser(data))/* .then(() => navigate("/auth/mail")) */;
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <FormTitle className={style.title}>Регистрация</FormTitle>
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <TextFieldsetRegister
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <EmailFieldsetRegister
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <PasswordFieldsetRegister
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <AgreementRegister register={register} />
          <ButtonFieldsetRegister isValid={isValid} />
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
