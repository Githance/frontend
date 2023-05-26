import { FC, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Tab } from '../UI/index';
import style from './card-table.module.css';
import CustomSelect from '../custom-select/custom-select';
import { MainCard } from '../UI';
import Modal from '../UI/modal/modal';
import CreateProject from '../modal/create-project/create-project';
import useModal from '~/hook/useModal';
import { Button } from '../UI/index';
import { Projectlist } from '~/services/slice/project/project-slice';

const selectorOptions = [
  { value: 'test', label: 'test' },
  { value: 'test1', label: 'test1' },
  { value: 'test2', label: 'test2' },
  { value: 'test3', label: 'test3' },
];
const tabOptions = [
  { name: 'Все проекты' },
  { name: 'Идёт набор' },
  { name: 'Завершённые проекты' },
  { name: 'Текущие проекты' },
];

type Props = {
  projectList: Projectlist[] | null;
};

const CardTable: FC<Props> = ({ projectList }) => {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [tab, setTab] = useState('Все проекты');
  const cardColors = ['#CAE1FF', '#FBF6C3', '#EDE2FF', '#F6D2D1'];

  return (
    <section className={style.container}>
      <div className={style.selectors_wrapper}>
        <ul className={style.btns_wrapper}>
          {tabOptions.map((option, index) => (
            <li key={index}>
              <Tab active={tab} name={option.name} onClick={() => setTab(option.name)} />
            </li>
          ))}
        </ul>
        <CustomSelect
          isClearable={true}
          isSeacheble={false}
          options={selectorOptions}
          placeholder="выбрать профессию"
        />
      </div>
      <div className={style.cards_wrapper}>
        <Button isValid type="button" onClick={openModal} className={style.button} />
        {projectList?.map((item, index) => {
          const numColors = cardColors.length;
          return (
            <MainCard
              key={nanoid()}
              status={item.status}
              title={item.name}
              subtitle={item.intro}
              id={item.id}
              percent="30"
              color={cardColors[index % numColors]}
            />
          );
        })}
      </div>
      {isOpen && (
        <Modal classname={style.modal} onClose={closeModal}>
          <CreateProject />
        </Modal>
      )}
    </section>
  );
};

export default CardTable;
