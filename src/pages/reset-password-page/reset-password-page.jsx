/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import style from "./reset-password-page.module.css";

function ResetPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  /* const onSubmit = handleSubmit((data) => {
    dispatch(resetUserPassword(data))
      .unwrap()
      .then(() => navigate("/"))
      .catch((err) => {
        for (const key in err) {
          setError(key, {
            type: "server",
            message: err[key],
          });
        }
      });
  }); */

  return (
    <div className={style.container}>
      <div className={style.content}>
        <p className={style.title}>Новый пароль</p>
        <Form /* onSubmit={onSubmit} */>
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
