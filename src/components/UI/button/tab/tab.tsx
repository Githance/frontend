import { FC } from 'react';
import Button from '../button';
import style from './tab.module.css';
import cn from 'classnames';

type Props = {
  name: string;
  classname?: string;
  active: boolean;
};

const Tab: FC<Props> = ({ name, classname, ...rest }) => {
  return (
    <Button
      type="button"
      isValid={true}
      className={cn(rest.active ? style.activeButton : style.button, classname)}
      {...rest}
    >
      {name}
    </Button>
  );
};

export default Tab;
