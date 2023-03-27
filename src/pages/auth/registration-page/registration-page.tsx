import { useDispatch } from '~/services/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Agreement,
  ButtonFieldset,
  EmailFieldset,
  Form,
  GoogleBtn,
  PasswordFieldset,
  TextFieldset,
} from '~/components/UI/index';
import style from './registration-page.module.css';
import { registerUser } from '~/services/slice/auth/register-page-slice';
import { setEmail } from '~/services/actions';
import oauthSignIn from '~/utils/google-request';

function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password1: '',
    },
  });

  const handleGoogleSubmit = () => {
    oauthSignIn();
  };

  const onSubmit = handleSubmit((data) => {
    dispatch(setEmail(data.email));
    dispatch(registerUser(data))
      .unwrap()
      .then(() => navigate('/auth/mail/resend-register'))
      .catch((err) => {
        if (err?.name) {
          setError('name', {
            type: 'server',
            message: err['name'],
          });
        } else if (err?.email) {
          setError('email', {
            type: 'server',
            message: err['email'],
          });
        } else if (err?.password1) {
          setError('password1', {
            type: 'server',
            message: err['password1'],
          });
        }
      });
  });

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>Регистрация</h2>
        <Form onSubmit={onSubmit} className={style.fieldset__container}>
          <TextFieldset
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <EmailFieldset
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <PasswordFieldset
            validationSchema={{ minLength: { value: 8, message: 'Минимум 8 символов' } }}
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
            htmlFor="password1"
          />
          <Agreement register={register} className={style.agreement} />
          <ButtonFieldset isValid={isValid} />
        </Form>
        <GoogleBtn onClick={handleGoogleSubmit} />
        <p className={style.text}>
          Уже зарегистрированы?{' '}
          <Link className={style.link} to="/auth">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegistrationPage;
