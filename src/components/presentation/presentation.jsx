/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-boolean-value */
import { Button } from '../UI/index';
import style from './presentation.module.css';

export default function Presentation() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Мы — сообщество единомышленников</h1>
        <p className={style.subtitle}>
          Делаем вместе IT-проекты для портфолио и бизнеса. С&nbsp;нами ты можешь создать свой
          проект или&nbsp;присоединиться к существующему.
        </p>
        <Button type="button" isValid={true} className={style.button}>
          Присоединиться к сообществу
        </Button>
        <div className={style.man_image}></div>
        <div className={style.woman_image}></div>
      </div>
    </div>
  );
}
