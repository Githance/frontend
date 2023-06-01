import { FC } from 'react';
import CreateVacancy from '~/components/modal/create-vacancy/create-vacancy';
import useModal from '~/hook/useModal';
import { useDispatch } from '~/services/hooks';
import { deleteVacancyByID, updateVacancyByID } from '~/services/slice/project/vacancy-slice';
import { checkVacancyCard } from '~/utils/check-vacancy-card';
import { cutText } from '~/utils/cutText';
import Button from '../../button/button';
import SubmitBtn from '../../button/submit-btn/submit-btn';
import BasketIcon from '../../icons/basket-icon';
import Modal from '../../modal/modal';
import style from './profession-card.module.css';

type Props = {
  profession: { id: number; name: string };
  description: string;
  isPublished: boolean;
  id: number;
};

const ProfessionCard: FC<Props> = ({ id, profession, description, isPublished }) => {
  const dispatch = useDispatch();
  const colors = ['#e2e2f6', '#F6D2D1', '#D0E6FF', '#D4D5FF'];
  const randomColor = colors[Math.floor(Math.random() * 4)];
  const handleDelete = () => dispatch(deleteVacancyByID(id));
  const [isOpen, openModal, closeModal] = useModal(false);
  //! НЕ РАБОТАЕТ ОПУБЛИКОВАНИЕ
  const handlePublisher = () =>
    dispatch(
      updateVacancyByID({
        id,
        data: { profession: { name: 'manager' }, description, is_published: true },
      }),
    );

  return (
    <>
      <article className={style.container} style={{ backgroundColor: `${randomColor}` }}>
        <h2 className={style.profession}>
          {cutText(checkVacancyCard(profession.id) as string, 30)}
        </h2>
        <p className={style.description}>{cutText(description, 172)}</p>
        <Button className={style.moreBtn} type="button" isValid={true} onClick={openModal}>
          подробнее
        </Button>
        {!isPublished ? (
          <SubmitBtn className={style.submitBtn} isValid={true} onClick={handlePublisher}>
            Опубликовать
          </SubmitBtn>
        ) : (
          <p className={style.note}>Вакансия размещена</p>
        )}
        <Button className={style.deleteBtn} type="button" isValid={true} onClick={handleDelete}>
          <BasketIcon place="vacancy" />
        </Button>
      </article>
      {isOpen && (
        <Modal onClose={closeModal} closeIcon={true}>
          <CreateVacancy
            isPublished={isPublished}
            description={description}
            profession={profession.name}
            onClose={closeModal}
            title="Редактируйте вакансию"
          />
        </Modal>
      )}
    </>
  );
};
export default ProfessionCard;
