/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/form/form';
import { Button, EmailFieldset } from '../../components/UI/index';
import style from './forgot-password-page.module.css';
import { resetUserPassword, setEmail } from '../../services/slice/user-auth-slice';

function ForgotPasswordPage() {
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
      email: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(setEmail(data));
    dispatch(resetUserPassword(data))
      .unwrap()
      .then(() => navigate('/auth/mail/resend-password'))
      .catch((err) => {
        for (const key in err) {
          setError(key, {
            type: 'server',
            message: err[key],
          });
        }
      });
  });

  return (
    <div className={style.container}>
      <div className={style.content}>
        <p className={style.title}>Забыли пароль?</p>
        <p className={style.text}>
          Пожалуйста, введите адрес электронной почты, на&nbsp;который мы&nbsp;отправим вам
          инструкцию для восстановления пароля
        </p>
        <Form onSubmit={onSubmit}>
          <EmailFieldset
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <Button
            className={`${style.button} ${
              isValid ? style.button__main : style.button__main_noValid
            }`}
            type="submit"
            isValid={isValid}
          >
            Отправить
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
