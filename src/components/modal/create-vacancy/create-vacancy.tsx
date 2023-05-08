import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import CustomSelect from '~/components/custom-select/custom-select';
import CommonInput from '~/components/form-inputs/common-input';
import { Form, Label, SubmitBtn } from '~/components/UI';
import Textarea from '~/components/UI/form/textarea/textarea';
import useProject from '~/hook/useProject';
import style from './create-vacancy.module.css';

const selectorOptions = [
  { value: 0, label: 'тестировщик' },
  { value: 1, label: 'фронтенд' },
  { value: 2, label: 'бэкенд' },
];

const CreateVacancy: FC = () => {
  const { setError, handleSubmit, control, formState, setFocus } = useForm({
    mode: 'onChange',
    defaultValues: {
      profession: '',
      description: '',
      is_published: false,
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };

  /*   useEffect(() => {
    setFocus('name');
  }, [setFocus]);  */

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <fieldset className={style.fieldset}>
        <h2 className={style.title}>Создайте вакансию</h2>
        <CustomSelect
          isClearable={true}
          isSeacheble={false}
          options={selectorOptions}
          placeholder="выбрать профессию"
        />
        <Label htmlFor="description" className={style.label}>
          Требования к специалисту
        </Label>
        <Textarea
          name="description"
          control={control}
          className={style.textarea}
          maxLength={2000}
        />
        <p className={style.message}>
          Опишите какие задачи будут стоять перед специалистом, какими навыками он должен обладать
          для участия в проекте. Если вы не знаете, оставьте поле пустым.
        </p>
      </fieldset>

      <SubmitBtn isValid={formState.isValid} className={style.submitBtn}>
        Сохранить
      </SubmitBtn>
    </Form>
  );
};

export default CreateVacancy;
