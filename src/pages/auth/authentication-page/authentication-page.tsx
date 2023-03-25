import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from '~/services/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonFieldset, EmailFieldset, PasswordFieldset } from '../../../components/UI/index';
import style from './authentication-page.module.css';
import oauthSignIn from '../../../utils/google-request';
import { loginUser } from '~/services/slice/auth/auth-page-slice';
import { GoogleBtn, Form } from '../../../components/UI/index';
import { getLoginErrorText } from '~/services/slice/auth/auth-page-slice';

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
      .then(() => navigate('/'))
      .catch((err) => {
        console.log(err);
        if (err?.email) {
          setError('email', {
            type: 'server',
            message: err.email,
          });
        }
      });
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
            htmlFor="password"
          />
          <ButtonFieldset isValid={isValid} error={loginErrorText} />
        </Form>
        <GoogleBtn onClick={handleGoogleSubmit} />
        <p className={style.text}>
          Нет аккаунта?
          <Link className={style.link} to="registration">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AuthenticationPage;
