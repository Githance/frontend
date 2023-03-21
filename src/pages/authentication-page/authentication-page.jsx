/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/self-closing-comp */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import Form from '../../components/form/form';
import FormTitle from '../../components/form-title/form-title';
import EmailFieldsetAuth from './email-fieldset-auth/email-fieldset-auth';
import PasswordFieldsetAuth from './password-fieldset-auth/password-fieldset-auth';
import ButtonFieldsetAuth from './button-fieldset-auth/button-fieldset-auth';
import style from './authentication-page.module.css';
import oauthSignIn from '../../utils/google-request';
import { loginUser } from '../../services/slice/user-auth-slice';
import { GoogleBtn } from '../../components/UI/index';

function AuthenticationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({ mode: 'onChange', defaultValues: { email: '', password: '' } });

  const handleGoogleSubmit = () => {
    oauthSignIn();
  };

  const onSubmit = handleSubmit((data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => navigate('/'));
  });

  return (
    <div className={style.container}>
      <div className={style.content}>
        <FormTitle className={style.title}>Вход</FormTitle>
        <Form onSubmit={onSubmit}>
          <EmailFieldsetAuth
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <PasswordFieldsetAuth
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <ButtonFieldsetAuth isValid={isValid} />
        </Form>

        <GoogleBtn onClick={handleGoogleSubmit} />

        <div className={style.container__text}>
          <p className={style.text}>Нет аккаунта?</p>
          <Link className={style.link} to="registration">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationPage;
