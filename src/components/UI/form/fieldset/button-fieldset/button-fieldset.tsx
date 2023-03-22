import { FC } from 'react';
import { Button, InputMessage } from '../../../index';
import style from './button-fieldset.module.css';
import cn from 'classnames';

type Props = {
  isValid: boolean;
  error?: any;
};
const ButtonFieldset: FC<Props> = ({ isValid, error }) => {
  return (
    <fieldset className={cn(style.fieldset, style.container__buttons)}>
      {error && (
        <InputMessage type="error" message={error.non_field_errors} className={style.error} />
      )}
      <Button
        className={`${style.button} ${isValid ? style.button__main : style.button__main_noValid}`}
        type="submit"
        isValid={isValid}
      >
        Войти
      </Button>
      <p className={style.text}>или</p>
    </fieldset>
  );
};

export default ButtonFieldset;
