import { FC } from 'react';
import { cutText } from '~/utils/cutText';
import Button from '../../button/button';
import SubmitBtn from '../../button/submit-btn/submit-btn';
import BasketIcon from '../../icons/basket-icon';
import style from './profession-card.module.css';

type Props = {
  title?: string;
  subtitle: string;
  onClick?: any;
};

const ProfessionCard: FC<Props> = ({ title, subtitle, onClick }) => {
  const colors = ['#e2e2f6', '#F6D2D1', '#D0E6FF', '#D4D5FF'];
  const randomColor = colors[Math.floor(Math.random() * 4)];
  return (
    <article className={style.container} style={{ backgroundColor: `${randomColor}` }}>
      <h2 className={style.title}>{cutText(title as string, 30)}</h2>
      <p className={style.subtitle}>{cutText(subtitle, 172)}</p>
      <Button className={style.moreBtn} type="button" isValid={true}>
        редактировать
      </Button>
      <SubmitBtn className={style.submitBtn} isValid={true}>
        Опубликовать
      </SubmitBtn>
      <Button className={style.deleteBtn} type="button" isValid={true}>
        <BasketIcon place="vacancy" />
      </Button>
    </article>
  );
};
export default ProfessionCard;
