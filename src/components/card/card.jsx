/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
import Button from "../button/button";
import style from "./card.module.css";

export default function Сard({ ...props }) {
  const { status, title, subtitle, percent, color, empty } = props;
  return (
    <article
      className={style.container}
      style={{ backgroundColor: `${color}` }}
    >
      {empty ? (
        <div className={style.empty_container}></div>
      ) : (
        <>
          <span className={style.status}>{status}</span>
          <div className={style.title_wrapper}>
            <h2 className={style.title}>{title}</h2>
            <Button className={style.button} />
          </div>
          <p className={style.subtitle}>{subtitle}</p>
          <div className={style.progress_bar}>
            <div
              className={style.load_bar}
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <p
            className={style.bar_description}
          >{`${percent}% команды собрано`}</p>
        </>
      )}
    </article>
  );
}
