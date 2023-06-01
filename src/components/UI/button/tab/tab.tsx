import { FC } from 'react';
import Button from '../button';
import style from './tab.module.css';
import cn from 'classnames';

type Props = {
  name: string;
  classname?: string;
  active: boolean;
  onClick: () => void;
};

const Tab: FC<Props> = ({ name, classname, active, onClick }) => {
  return (
    <Button
      isValid={true}
      className={cn(active ? style.activeButton : style.button, classname)}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default Tab;
