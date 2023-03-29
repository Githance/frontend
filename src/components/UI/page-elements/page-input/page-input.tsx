import { FC } from 'react';
import cn from 'classnames';
import style from './page-input.module.css';
import Button from '../../button/button';
import PageBaseInput from '../page-base-elements/page-base-input/page-base-input';
import PenIcon from '../../icons/pen-icon';
import CheckIcon from '../../icons/check-icon';

type Size = 'large' | 'medium' | 'small';

type Props = {
  control?: any;
  inputSize: Size;
  iconSize: Size;
};

const PageInput: FC<Props> = ({ control, inputSize, iconSize }) => {
  return (
    <div
      className={cn(
        style.pageInput,
        inputSize === 'large' ? style.pageInput_size_large : undefined,
        inputSize === 'medium' ? style.pageInput_size_medium : undefined,
        inputSize === 'small' ? style.pageInput_size_small : undefined,
      )}
    >
      <PageBaseInput size={inputSize} control={control} />
      <Button type="button" isValid>
        <PenIcon size={iconSize} />
      </Button>
      <Button type="button" isValid>
        <CheckIcon size={iconSize} />
      </Button>
    </div>
  );
};

export default PageInput;
