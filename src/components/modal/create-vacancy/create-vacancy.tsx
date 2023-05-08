import React from 'react'

const CreateVacancy = () => {
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
        <Textarea name="intro" control={control} className={style.textarea} maxLength={300} />
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
}

export default CreateVacancy
