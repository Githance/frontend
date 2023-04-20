import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { useForm } from 'react-hook-form';
import style from './project-page.module.css';
import PageInput from '~/components/UI/page-elements/page-input/page-input';
import PageLink from '~/components/UI/page-elements/page-link/page-link';
import Textarea from '~/components/UI/form/textarea/textarea';
import { Divider, Button, ArrowRightIcon, SubmitBtn, Tab, Label } from '~/components/UI/index';
import { useSelector } from 'react-redux';
import { getProject } from '~/services/selectors';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from '~/services/hooks';
import {
  deleteUserProjectByID,
  getProjectByID,
  setProject,
  updateUserProjectByID,
} from '~/services/slice/project/project-slice';
import useModal from '~/hook/useModal';
import Modal from '~/components/UI/modal/modal';
import ConfirmDelete from '~/components/modal/confirm-delete/confirm-delete';
import { handleErrors } from '~/utils/handleErrors';

const tabOptions = [{ name: 'Информация о проекте' }, { name: 'Команда' }, { name: 'Вакансии' }];

const ProjectPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, openModal, closeModal] = useModal(false);
  const [tab, setTab] = useState('Информация о проекте');
  const { id } = useParams();
  const project = useSelector(getProject);

  const { setError, handleSubmit, control, formState } = useForm({
    mode: 'onChange',
    defaultValues: {
      email1: '',
      telegram1: '',
      link1_url: null,
      link2_url: null,
      link3_url: null,
    },
    values: {
      ...project,
    },
  });

  useEffect(() => {
    dispatch(getProjectByID(id))
      .unwrap()
      .then((res: any) => {
        dispatch(setProject(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, id]);

  const onSubmit = handleSubmit((data) => {
    dispatch(updateUserProjectByID({ id, data }))
      .unwrap()
      .then((res: any) => {
        dispatch(setProject(res));
      })
      .catch((err) => {
        handleErrors(err, setError);
      });
    console.log(data);
  });
  // УДАЛЕНИЕ
  const handleDeleteProject = () => {
    dispatch(deleteUserProjectByID(id))
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <ul className={style.btns_wrapper}>
        {tabOptions.map((option, index) => (
          <li key={index}>
            <Tab active={tab} name={option.name} onClick={() => setTab(option.name)} />
          </li>
        ))}
      </ul>
      {project?.id && (
        <form className={style.form} onSubmit={onSubmit} noValidate>
          <fieldset className={style.form__name}>
            <PageInput
              inputSize="large"
              control={control}
              name="name"
              maxLength={32}
              value={project.name}
            />
          </fieldset>

          <fieldset className={style.form__info}>
            <h3 className={style.title}>Контакты создателя проекта</h3>
            <Label className={style.label}>Электронная почта</Label>
            <PageInput
              value={project.email}
              classname={style.input}
              inputSize="small"
              control={control}
              name="email"
              divider="bold"
            />
            <Label className={style.label}>Ник в Telegram</Label>
            <PageInput
              value={project.telegram}
              inputSize="small"
              control={control}
              name="telegram"
              divider="bold"
            />

            <h3 className={style.title}>
              Контакты менеджера <span className={style.span}>(если менеджер назначен)</span>
            </h3>
            <Label className={style.label}>Электронная почта</Label>
            <PageInput
              classname={style.input}
              inputSize="small"
              control={control}
              name="email1"
              divider="bold"
            />
            <Label className={style.label}>Ник в Telegram</Label>
            <PageInput inputSize="small" control={control} name="telegram1" divider="bold" />

            <h3 className={style.title}>Ссылки</h3>
            <PageLink
              inputSize="small"
              control={control}
              name="link1_url"
              linkName="Ссылка 1"
              divider="bold"
            />
            <PageLink
              inputSize="small"
              control={control}
              name="link2_url"
              linkName="Ссылка 2"
              divider="bold"
            />
            <PageLink
              inputSize="small"
              control={control}
              name="link3_url"
              linkName="Ссылка 3"
              divider="bold"
            />

            <h3 className={style.title}>Управление</h3>
            <Button type="button" className={style.button} isValid onClick={openModal}>
              Удалить проект <ArrowRightIcon size="small" />
            </Button>
            <Divider weight="bold" />
          </fieldset>
          {isOpen && (
            <Modal onClose={closeModal} closeIcon={false}>
              <ConfirmDelete onConfirm={handleDeleteProject} onCancel={closeModal} />
            </Modal>
          )}

          <fieldset className={style.form__about}>
            <Label className={style.title}>Краткое описание проекта</Label>
            <Textarea
              value={project.intro}
              name="intro"
              control={control}
              className={cn(style.shortTextarea, 'mb-4')}
              maxLength={300}
            />
            <Label className={style.title}>Подробное описание проекта</Label>
            <Textarea
              value={project.description}
              name="description"
              control={control}
              className={style.textarea}
              maxLength={1000}
            />
            <SubmitBtn isValid={formState.isDirty} className={cn(style.submit, 'mt-6')}>
              Сохранить
            </SubmitBtn>
          </fieldset>
        </form>
      )}
    </>
  );
};

export default ProjectPage;
