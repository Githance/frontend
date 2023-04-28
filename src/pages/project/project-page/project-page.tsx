import { FC, useState } from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import style from './project-page.module.css';
import PageInput from '~/components/page-input/page-input';
import PageLink from '~/components/page-link/page-link';
import Textarea from '~/components/UI/form/textarea/textarea';
import { Divider, Button, ArrowRightIcon, SubmitBtn, Tab, Label } from '~/components/UI/index';
import { useSelector } from 'react-redux';
import { getProject } from '~/services/selectors';
import { useParams } from 'react-router-dom';
import useModal from '~/hook/useModal';
import Modal from '~/components/UI/modal/modal';
import ConfirmDelete from '~/components/modal/confirm-delete/confirm-delete';
import useProject from '~/hook/useProject';

const ProjectPage: FC = () => {
  const { id } = useParams();
  const [isOpen, openModal, closeModal] = useModal(false);

  const project = useSelector(getProject);

  const { setError, handleSubmit, control, formState } = useForm({
    mode: 'onChange',
    defaultValues: {
      email1: '',
      telegram1: '',
      link1_url: '',
      link2_url: '',
      link3_url: '',
    },
    values: {
      ...project,
    },
  });
  const { onSubmit, handleDeleteProject } = useProject(setError, { deletePath: '/' }, id);

  return (
    <>
      {project?.id && (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <fieldset className={style.form__name}>
            <PageInput
              hasErrorMessage={true}
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
              hasErrorMessage={true}
              value={project.email}
              classname={style.input}
              inputSize="small"
              control={control}
              name="email"
              divider="bold"
            />
            <Label className={style.label}>Ник в Telegram</Label>
            <PageInput
              hasErrorMessage={true}
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
              hasErrorMessage={true}
              classname={style.input}
              inputSize="small"
              control={control}
              name="email1"
              divider="bold"
            />
            <Label className={style.label}>Ник в Telegram</Label>
            <PageInput
              hasErrorMessage={true}
              inputSize="small"
              control={control}
              name="telegram1"
              divider="bold"
            />

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
              className={cn(style.shortTextarea)}
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
