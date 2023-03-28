import React, { FC } from 'react';
import style from './submit-btn.module.css';
import { Button } from '../../index';


const SubmitBtn: FC<any> = ({ isValid, children }) => {
  return (
    <Button
      className={`${style.button} ${isValid ? style.button__main : style.button__main_noValid}`}
      type="submit"
      isValid={isValid}
    >
      {children}
    </Button>
  );
};

export default SubmitBtn;
