import { FC } from 'react';
import cn from 'classnames';
import { useController } from 'react-hook-form';
import style from './page-base-textarea.module.css';

type Props = {
  control?: any;
  name: string;
  className?: string;
};

const PageBaseTextarea: FC<Props> = ({ control, name, className }) => {
  const { field } = useController({
    control,
    name,
  });

  return <textarea {...field} className={cn(style.textarea, className)}></textarea>;
};

export default PageBaseTextarea;
