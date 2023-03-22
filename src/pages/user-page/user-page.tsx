/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import cn from 'classnames';
import style from './user-page.module.css';
import Divider from '~/components/UI/divider/divider';

const UserPage: FC = () => {
  return (
    <main className={style.userPage}>
      <p className={style.userPage__name}>Имя пользователя</p>
      <div className={cn(style.userPage__container, style.userPage__container_position_info)}>
        <div className={style.userPage__container}>
          <p className={style.title}>Контакты</p>
          <div
            className={cn(style.userPage__container, style.userPage__container_position_contacts)}
          >
            <p className={style.label}>Ник в Telegram</p>
            <p className={cn(style.label, style.label_color_black)}>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className={style.userPage__container}>
          <p className={style.title}>Ссылки</p>
          <div className={cn(style.userPage__container, style.userPage__container_position_links)}>
            <a href="#" target="_blank" className={style.link}>
              Портфолио
            </a>
            <Divider />
            <a href="#" target="_blank" className={style.link}>
              Резюме
            </a>
          </div>
        </div>
      </div>
      <div className={cn(style.userPage__container, style.userPage__container_position_about)}>
        <p className={style.title}>О себе</p>
        <p className={style.text}>
          Вот пример статьи на 1000 символов. Это достаточно маленький текст, оптимально подходящий
          для карточек товаров в интернет-магазинах или для небольших информационных публикаций. В
          таком тексте редко бывает более 2-3 абзацев и обычно один подзаголовок. Но можно и без
          него. На 1000 символов рекомендовано использовать 1-2 ключа и одну картину. Текст на 1000
          символов – это сколько примерно слов? Статистика Word показывает, что «тысяча» включает в
          себя 150-200 слов средней величины. Но, если злоупотреблять предлогами, союзами и другими
          частями речи на 1-2 символа, то количество слов неизменно возрастает.
        </p>
      </div>
      <div className={cn(style.userPage__container, style.userPage__container_position_projects)}>
        <p className={style.title}>Участие в проектах</p>
      </div>
    </main>
  );
};

export default UserPage;
