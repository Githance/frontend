import { FC, useState } from 'react';
import { Button } from '../UI/index';
import style from './card-table.module.css';
import CustomSelect from '../custom-select/custom-select';
import { MainCard } from '../UI';
import Modal from '../UI/modal/modal';
import CreateProject from '../create-project/create-project';

const CardTable: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const selectorOptions = [
    { value: 'test', label: 'test' },
    { value: 'test1', label: 'test1' },
    { value: 'test2', label: 'test2' },
    { value: 'test3', label: 'test3' },
  ];
  const navBarOptions = [
    { name: 'Все проекты' },
    { name: 'Идёт набор' },
    { name: 'Завершённые проекты' },
    { name: 'Текущие проекты' },
  ];
  console.log(openModal);
  return (
    <section className={style.container}>
      <div className={style.selectors_wrapper}>
        <div className={style.btns_wrapper}>
          {navBarOptions.map((option, index) => (
            <Button key={index} type="button" isValid={true} className={style.button}>
              {option.name}
            </Button>
          ))}
        </div>
        <CustomSelect
          isClearable={true}
          isSeacheble={false}
          options={selectorOptions}
          placeholder="выбрать профессию"
        />
      </div>
      <div className={style.cards_wrapper}>
        <div onClick={() => setOpenModal(true)} aria-hidden="true">
          <MainCard
            status="В процессе"
            title="Githance"
            subtitle="Сайт для создания проектов 
в портфолио"
            percent="30"
            empty={true}
          />
        </div>
        <MainCard
          status="В процессе"
          title="Маршруты
моего города моего города"
          subtitle="Сайт для городских квестов, с простым конструктором и адаптивной формой для ответов Сайт для городских квестов, с простым конструктором и адаптивной формой для ответов Сайт для городских квестов, с простым конструктором и адаптивной формой для ответов"
          percent="40"
        />
        <MainCard
          status="В процессе"
          title="Githance"
          subtitle="Сайт для создания проектов 
в портфолио"
          percent="80"
        />
        <MainCard
          status="В процессе"
          title="Githance"
          subtitle="Сайт для создания проектов 
в портфолио"
          percent="90"
        />
        <MainCard
          status="В процессе"
          title="Githance"
          subtitle="Сайт для создания проектов 
в портфолио"
          percent="10"
        />
        <MainCard
          status="В процессе"
          title="Githance"
          subtitle="Сайт для создания проектов 
в портфолио"
          percent="10"
        />
      </div>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <CreateProject />
        </Modal>
      )}
    </section>
  );
};

export default CardTable;
