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
import { getCardColor } from '~/utils/get-card-color';
import { useSelector } from '~/services/hooks';
import { getIsAuth } from '~/services/selectors';
import { useNavigate } from 'react-router-dom';
import { PATH } from '~/utils/variables';

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
  projectList: Projectlist[] | undefined;
};

const CardTable: FC<Props> = ({ projectList }) => {
  const navigate = useNavigate();
  const [isOpen, openModal, closeModal] = useModal(false);
  const [tab, setTab] = useState('Все проекты');
  const isAuth = useSelector(getIsAuth);

  const handleClickCreateProject = () => {
    if (isAuth) {
      openModal();
    } else {
      navigate(PATH.AUTH);
    }
  };

  return (
    <section className={style.container}>
      <div className={style.selectors_wrapper}>
        <ul className={style.btns_wrapper}>
          {tabOptions.map((option, index) => (
            <li key={index}>
              <Tab
                active={tab === option.name}
                name={option.name}
                onClick={() => setTab(option.name)}
              />
            </li>
          ))}
        </ul>
        <CustomSelect
          isClearable={false}
          isSeacheble={false}
          options={selectorOptions}
          placeholder="выбрать профессию"
        />
      </div>
      <div className={style.cards_wrapper}>
        <Button isValid type="button" onClick={handleClickCreateProject} className={style.button} />
        {projectList?.map((item, index) => {
          return (
            <MainCard
              key={nanoid()}
              status={item.status}
              title={item.name}
              subtitle={item.intro}
              id={item.id}
              percent="30"
              color={getCardColor(index)}
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
