import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CreateVacancy from '~/components/modal/create-vacancy/create-vacancy';
import { Button, CrossIcon } from '~/components/UI';
import ProfessionCard from '~/components/UI/cards/profession-card/profession-card';
import Modal from '~/components/UI/modal/modal';
import useModal from '~/hook/useModal';
import { useDispatch } from '~/services/hooks';
import { getVacanciesID } from '~/services/slice/project/project-slice';
import style from './vacancy-page.module.css';

const VacancyPage: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isOpen, openModal, closeModal] = useModal(false);
  useEffect(() => {
    dispatch(getVacanciesID(id)).then((res) => console.log(res));
  }, []);
  return (
    <div className={style.wrapper}>
      <Button onClick={openModal} className={style.addBtn} type="button" isValid={true}>
        <CrossIcon />
      </Button>
      <ul className={style.cardWrapper}>
        <li>
          <ProfessionCard
            title="Тестировщик"
            subtitle=" много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текстамного текста много текста много текстамного текста много текста много текстамного текста много текста много текстамного текста много текста много текстамного текста много текста много текстамного текста много текста много текста"
          />
        </li>
        <li>
          <ProfessionCard title="Тестировщик" subtitle="много текста много текста много текста" />
        </li>
        <li>
          <ProfessionCard title="Тестировщик" subtitle="много текста много текста много текста" />
        </li>
      </ul>
      {isOpen && (
        <Modal onClose={closeModal} closeIcon={true}>
          <CreateVacancy />
        </Modal>
      )}
    </div>
  );
};

export default VacancyPage;
