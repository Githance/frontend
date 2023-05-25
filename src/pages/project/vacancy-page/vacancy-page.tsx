import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import CreateVacancy from '~/components/modal/create-vacancy/create-vacancy';
import { Button, CrossIcon } from '~/components/UI';
import Modal from '~/components/UI/modal/modal';
import VacancyList from '~/components/vacancy-list/vacancy-list';
import useModal from '~/hook/useModal';
import useVacancy from '~/hook/useVacancy';
import style from './vacancy-page.module.css';

const VacancyPage: FC = () => {
  const { id } = useParams();
  const [isOpen, openModal, closeModal] = useModal(false);
  const { results } = useVacancy(id);

  return (
    <div className={style.wrapper}>
      <Button onClick={openModal} className={style.addBtn} type="button" isValid={true}>
        <CrossIcon />
      </Button>
      <VacancyList results={results} openModal={openModal} />
      {isOpen && (
        <Modal onClose={closeModal} closeIcon={true}>
          <CreateVacancy onClose={closeModal} title="Создайте вакансию" />
        </Modal>
      )}
    </div>
  );
};

export default VacancyPage;
