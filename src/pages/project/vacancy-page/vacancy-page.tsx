import React, { FC } from 'react';
import { Button, CrossIcon } from '~/components/UI';
import ProfessionCard from '~/components/UI/cards/profession-card/profession-card';
import Modal from '~/components/UI/modal/modal';
import useModal from '~/hook/useModal';
import style from './vacancy-page.module.css';

const VacancyPage: FC = () => {
  const [isOpen, openModal, closeModal] = useModal(false);
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
        <Modal onClose={closeModal} closeIcon={false}>
          тест
        </Modal>
      )}
    </div>
  );
};

export default VacancyPage;
