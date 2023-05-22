import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useProject from '~/hook/useProject';
import { TextareaValidationScheme } from '~/utils/validation-scheme';
import CommonInput from '../../form-inputs/common-input';
import { Form, Label, SubmitBtn } from '../../UI';
import Textarea from '../../UI/form/textarea/textarea';
import style from './create-project.module.css';

const CreateProject: FC = () => {
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
  const { onSubmit } = useProject(setError, { deletePath: null }, null);

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={style.form}>
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
        <Textarea
          name="intro"
          control={control}
          className={style.textarea}
          hasErrorMessage={true}
          validation={TextareaValidationScheme}
        />
        <p className={style.message}>Эта информация будет видна на главной странице.</p>
        <p className={style.message}>
          <b>Важно:</b> Не сокращайте слова. Позже вы сможете добавить подробное описание проекта.{' '}
        </p>
      </fieldset>

      <SubmitBtn isValid={formState.isValid} className={style.submitBtn}>
        Создать проект
      </SubmitBtn>
    </Form>
  );
};

export default CreateProject;
