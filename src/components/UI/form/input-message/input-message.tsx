import { FC } from 'react';
import cn from 'classnames';
import style from './input-message.module.css';
import { addSpaceBeforeUpperCase } from '../../../../utils/addSpace';

type Props = {
  type: 'error' | 'warning';
  message?: any;
  className?: string;
};

const InputMessage: FC<Props> = ({ type, message, className }) => {
  const output = addSpaceBeforeUpperCase(message.join(' '));

  return <p className={cn(className, type === 'error' ? style.error : style.warning)}>{output}</p>;
};

export default InputMessage;
