import { unwrapResult } from '@reduxjs/toolkit';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import CustomSelect from '~/components/custom-select/custom-select';
import { Form, Label, SubmitBtn } from '~/components/UI';
import Textarea from '~/components/UI/form/textarea/textarea';
import { useDispatch } from '~/services/hooks';
import { createVacancy } from '~/services/slice/project/project-slice';
import { updateVacancyByID } from '~/services/slice/project/vacancy-slice';
import { handleErrors } from '~/utils/handleErrors';
import { textareaValidation2000Scheme } from '~/utils/validation-scheme';
import style from './create-vacancy.module.css';

const selectorOptions = [{ value: 1, label: 'manager' }];

type Props = {
  onClose: () => void;
  title: string;
  description?: string;
  profession?: string;
  isPublished?: boolean;
};
const CreateVacancy: FC<Props> = ({ isPublished, onClose, title, profession, description }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [currentValue, setCurrentValue] = useState(null);

  const { setError, handleSubmit, control, formState } = useForm({
    mode: 'onChange',
    defaultValues: {
      description: description || '',
    },
    values: {
      profession: currentValue,
      is_published: true,
    },
  });
  console.log(currentValue);
  const onChange = (newValue: any) => {
    setCurrentValue(newValue.value);
  };

  //! НЕ РАБОТАЕТ РЕДАКТИРОВАНИЕ
  const onSubmit = (data: any) => {
    !profession
      ? dispatch(createVacancy({ id, data }))
          .then(unwrapResult)
          .then(onClose)
          .catch((err) => {
            handleErrors(err, setError);
          })
      : dispatch(
          updateVacancyByID({
            id,
            data: { profession: { name: 'manager' }, description, is_published: false },
          }),
        );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <fieldset className={style.fieldset}>
        <h2 className={style.title}>{title}</h2>
        <CustomSelect
          onChange={onChange}
          isClearable={false}
          isSeacheble={false}
          options={selectorOptions}
          placeholder={profession || 'выбрать профессию'}
        />
        <Label htmlFor="description" className={style.label}>
          Требования к специалисту
        </Label>
        <Textarea
          name="description"
          control={control}
          className={style.textarea}
          validation={textareaValidation2000Scheme}
          hasErrorMessage={true}
        />
        <p className={style.message}>
          Опишите какие задачи будут стоять перед специалистом, какими навыками он должен обладать
          для участия в проекте. Если вы не знаете, оставьте поле пустым.
        </p>
      </fieldset>

      <SubmitBtn isValid={formState.isValid && !isPublished} className={style.submitBtn}>
        Сохранить
      </SubmitBtn>
    </Form>
  );
};

export default CreateVacancy;
