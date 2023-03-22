/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/self-closing-comp */
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonFieldset, EmailFieldset, PasswordFieldset } from '../../../components/UI/index';
import style from './authentication-page.module.css';
import oauthSignIn from '../../../utils/google-request';
import { loginUser } from '../../../services/slice/user-auth-slice';
import { GoogleBtn, Form } from '../../../components/UI/index';
import { getLoginErrorText } from '../../../services/selectors/selectors';

function AuthenticationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginErrorText = useSelector(getLoginErrorText);
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
        <h2 className={style.title}>Вход</h2>
        <Form onSubmit={onSubmit} className={style.fieldset__container}>
          <EmailFieldset
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <PasswordFieldset
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
            isLogginPage={true}
            htmlFor="password1"
          />
          <ButtonFieldset isValid={isValid} error={loginErrorText} />
        </Form>
        <GoogleBtn onClick={handleGoogleSubmit} />
        <p className={style.text}>
          Нет аккаунта?{' '}
          <Link className={style.link} to="registration">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AuthenticationPage;
