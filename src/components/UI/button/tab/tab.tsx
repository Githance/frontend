import { FC } from 'react';
import Button from '../button';
import style from './tab.module.css';
import cn from 'classnames';

type Props = {
  name: string;
  classname?: string;
  onClick: () => void;
  active: boolean;
};

const Tab: FC<Props> = ({ name, onClick, classname, active }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      isValid={true}
      className={cn(active ? style.activeButton : style.button, classname)}
    >
      {name}
    </Button>
  );
};

export default Tab;
