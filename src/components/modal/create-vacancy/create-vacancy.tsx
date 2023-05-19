import { unwrapResult } from '@reduxjs/toolkit';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import CustomSelect from '~/components/custom-select/custom-select';
import CommonInput from '~/components/form-inputs/common-input';
import { Form, Label, SubmitBtn } from '~/components/UI';
import Textarea from '~/components/UI/form/textarea/textarea';
import useProject from '~/hook/useProject';
import { useDispatch } from '~/services/hooks';
import { createVacancy } from '~/services/slice/project/project-slice';
import { handleErrors } from '~/utils/handleErrors';
import style from './create-vacancy.module.css';

const selectorOptions = [
  { value: 0, label: 'тестировщик' },
  { value: 1, label: 'фронтенд' },
  { value: 2, label: 'бэкенд' },
];

const CreateVacancy: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [currentValue, setCurrentValue] = useState(null);

  const { setError, handleSubmit, control, formState } = useForm({
    mode: 'onChange',
    defaultValues: {
      description: '',
    },
    values: {
      profession: currentValue,
      is_published: false,
    },
  });

  const onChange = (newValue: any) => {
    setCurrentValue(newValue.value);
  };

  const onSubmit = (data: any) => {
    dispatch(createVacancy({ id, data }))
      .then(unwrapResult)
      .catch((err) => {
        handleErrors(err, setError);
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <fieldset className={style.fieldset}>
        <h2 className={style.title}>Создайте вакансию</h2>
        <CustomSelect
          onChange={onChange}
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
