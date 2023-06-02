import { FC, ReactNode } from 'react';
import cn from 'classnames';
import style from './submit-btn.module.css';
import { Button } from '../../index';

type Props = {
  isValid: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const SubmitBtn: FC<Props> = ({ isValid, children, className, onClick }) => {
  return (
    <Button
      className={cn(
        style.button,
        className,
        isValid ? style.button__main : style.button__main_noValid,
      )}
      type="submit"
      isValid={isValid}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SubmitBtn;
