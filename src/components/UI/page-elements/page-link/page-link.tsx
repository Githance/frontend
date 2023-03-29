import { FC, useCallback, useState } from 'react';
import { useController, RegisterOptions } from 'react-hook-form';
import cn from 'classnames';
import style from './page-link.module.css';
import PageBaseInput from '../page-base-elements/page-base-input/page-base-input';

type Size = 'large' | 'medium' | 'small';

type Props = {
  control?: any;
  inputSize: Size;
  iconSize: Size;
  className?: string;
  name: string;
  rules?: RegisterOptions;
};

const PageLink: FC<Props> = ({ control, inputSize, iconSize, className, name, rules }) => {
  const [disabledInput, setDisabledInput] = useState(true);

  const {
    field,
    formState: { isSubmitSuccessful },
  } = useController({
    control,
    name,
    rules: rules,
  });

  return <div></div>;
};

export default PageLink;
