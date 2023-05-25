import { FC } from 'react';
import { useDispatch } from '~/services/hooks';
import { deleteVacancyByID, updateVacancyByID } from '~/services/slice/project/vacancy-slice';
import { cutText } from '~/utils/cutText';
import Button from '../../button/button';
import SubmitBtn from '../../button/submit-btn/submit-btn';
import BasketIcon from '../../icons/basket-icon';
import style from './profession-card.module.css';

type Props = {
  profession?: string;
  description: string;
  isPublished: boolean;
  id: number;
  onClick?: () => void;
};

const ProfessionCard: FC<Props> = ({ id, profession, description, isPublished, onClick }) => {
  const dispatch = useDispatch();
  const colors = ['#e2e2f6', '#F6D2D1', '#D0E6FF', '#D4D5FF'];
  const randomColor = colors[Math.floor(Math.random() * 4)];
  const handleDelete = () => dispatch(deleteVacancyByID(id));
  //! НЕ РАБОТАЕТ ОПУБЛИКОВАНИЕ
  const handlePublisher = () =>
    dispatch(
      updateVacancyByID({
        id,
        data: { profession: { name: 'frontend' }, description, is_published: true },
      }),
    );
  return (
    <article className={style.container} style={{ backgroundColor: `${randomColor}` }}>
      <h2 className={style.profession}>{cutText(profession as string, 30)}</h2>
      <p className={style.description}>{cutText(description, 172)}</p>
      <Button className={style.moreBtn} type="button" isValid={true}>
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
  );
};
export default ProfessionCard;
