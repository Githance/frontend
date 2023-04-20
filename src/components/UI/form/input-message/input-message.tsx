import { FC } from 'react';
import cn from 'classnames';
import style from './input-message.module.css';


type Props = {
  type: 'error' | 'warning';
  message?: any;
  className?: string;
};

const InputMessage: FC<Props> = ({ type, message, className }) => {
  
  return (
    <>
      {typeof message === 'string' ? (
        <p className={cn(className, type === 'error' ? style.error : style.warning)}>{message}</p>
      ) : (
        message.map((el: any, index: number) => (
          <p key={index} className={cn(className, type === 'error' ? style.error : style.warning)}>
            {el}
          </p>
        ))
      )}
    </>
  );
};

export default InputMessage;
