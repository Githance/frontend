import { FC, useState } from 'react';
import Button from '../button';
import style from './tab.module.css';
import cn from 'classnames';

type Props = {
  name: string;
  classname?: string;
  onClick: any;
  active: string;
};

const Tab: FC<Props> = ({ name, onClick, classname, active }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      isValid={true}
      className={cn(active === name ? style.activeButton : style.button, classname)}
    >
      {name}
    </Button>
  );
};

export default Tab;
