import React, { FC } from 'react';
import { BasketIcon, Button } from '~/components/UI';
import style from './confirm-delete.module.css';
type Props = {
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmDelete: FC<Props> = ({ onConfirm, onCancel }) => {
  return (
    <div className={style.wrapper}>
      <BasketIcon place="modal" />
      <h3 className={`${style.title} pt-1`}>Удалить проект?</h3>
      <p className={`${style.text} pb-2`}>
        Убедитесь, что вы оповестили всех участников проекта или в проекте нет участников.
      </p>
      <div className={style.btnWrapper}>
        <Button className={style.yesBtn} isValid={true} type="button" onClick={onConfirm}>
          Удалить
        </Button>
        <Button className={style.noBtn} isValid={true} type="button" onClick={onCancel}>
          Отмена
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
