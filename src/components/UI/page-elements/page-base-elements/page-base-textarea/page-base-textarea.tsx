import { FC, ReactNode } from 'react';
import { useController } from 'react-hook-form';
import style from './page-base-textarea.module.css';

type Props = {
  control?: any;
  children: ReactNode;
  name: string;
  className?: string;
};

const PageBaseTextarea: FC<Props> = ({ control, name, children, className }) => {
  const { field } = useController({
    control,
    name,
  });
  return (
    <textarea {...field} className={style.textarea}>
      {children}
    </textarea>
  );
};

export default PageBaseTextarea;
