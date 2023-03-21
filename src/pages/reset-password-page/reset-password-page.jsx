/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../../components/form/form';
import { Button } from '../../components/UI/index';
import PasswordFieldsetResetPassword from './password-fieldset-reset-password/password-fieldset-reset-password';
import style from './reset-password-page.module.css';
import { confirmUserPassword, resetEmail } from '../../services/slice/user-auth-slice';

function ResetPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, confirmCode } = useParams();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      new_password2: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    const userData = {
      new_password1: data.new_password2,
      new_password2: data.new_password2,
      uid: id,
      token: confirmCode,
    };
    dispatch(resetEmail());
    dispatch(confirmUserPassword(userData))
      .unwrap()
      .then(() => navigate('/'))
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
        <p className={style.title}>Новый пароль</p>
        <Form onSubmit={onSubmit}>
          <PasswordFieldsetResetPassword
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
            Сохранить
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
