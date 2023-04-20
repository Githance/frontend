import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from '~/services/hooks';
import { createProject, setProject } from '~/services/slice/project/project-slice';
import CommonInput from '../form-inputs/common-input';
import { Form, Label, SubmitBtn } from '../UI';
import Textarea from '../UI/form/textarea/textarea';
import style from './create-project.module.css';

const CreateProject: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setError, handleSubmit, control, formState, setFocus } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      intro: '',
      description: '',
      status: 'idea',
      telegram: '',
      email: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(createProject(data))
      .unwrap()
      .then((res: any) => {
        dispatch(setProject(res));
        navigate(`/project/${res.id}`);
      })
      .catch((err) => {
        setError('name', {
          type: 'server',
          message: err['name'],
        });

        console.log(err);
      });
  });

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <Form onSubmit={onSubmit} className={style.form}>
      <fieldset className={style.fieldset}>
        <h2 className={style.title}>Назовите свой проект</h2>
        <Label htmlFor="name" required={true}>
          Название
        </Label>
        <CommonInput control={control} name="name" placeholder="" />
      </fieldset>

      <fieldset className={style.fieldset}>
        <h2 className={style.title}>Опишите свой проект</h2>
        <Label htmlFor="intro" required={true}>
          Краткое описание
        </Label>
        <Textarea name="intro" control={control} className={style.textarea} maxLength={300} />
        <p className={style.message}>
          Коротко опишите о чем ваш проект. Эта информация будет видна на главной странице. Вы
          сможете изменить описание после создания проекта.
        </p>
        <p className={style.message}>
          <b>Важно:</b> Не сокращайте слова. Позже вы сможете добавить подробное описание проекта.{' '}
        </p>
      </fieldset>

      <fieldset className={style.fieldset}>
        <h2 className={style.title}>Оставьте свои контакты</h2>
        <Label htmlFor="email">Электронная почта</Label>
        <CommonInput
          control={control}
          name="email"
          placeholder=""
          validation={{ required: false }}
        />
        <Label htmlFor="telegram" className="pt-3">
          Ник в Telegram
        </Label>
        <CommonInput
          control={control}
          name="telegram"
          placeholder=""
          validation={{ required: false }}
        />
        <p className={style.message}>
          Ваши контакты будут видны специалистам, откликнувшимся на «вакансию». Это нужно для того,
          чтобы специалист смог уточнить у вас недостающую информацию по проекту.
        </p>
      </fieldset>
      <SubmitBtn isValid={formState.isValid} className={style.submitBtn}>
        Создать проект
      </SubmitBtn>
    </Form>
  );
};

export default CreateProject;
