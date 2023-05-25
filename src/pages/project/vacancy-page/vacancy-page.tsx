import { FC } from 'react';
import { useParams } from 'react-router-dom';
import CreateVacancy from '~/components/modal/create-vacancy/create-vacancy';
import { Button, CrossIcon } from '~/components/UI';
import ProfessionCard from '~/components/UI/cards/profession-card/profession-card';
import Modal from '~/components/UI/modal/modal';
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
      <ul className={style.cardWrapper}>
        {results.reverse().map((el: any, index: number) => {
          return (
            <li key={index}>
              <ProfessionCard
                isPublished={el.is_published}
                id={el.id}
                profession={el.profession}
                description={el.description}
                onClick={openModal}
              />
            </li>
          );
        })}
      </ul>
      {isOpen && (
        <Modal onClose={closeModal} closeIcon={true}>
          <CreateVacancy onClose={closeModal} title="Создайте вакансию" />
        </Modal>
      )}
    </div>
  );
};

export default VacancyPage;
