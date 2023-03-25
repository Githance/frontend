import { FC } from 'react';
import { useState, useEffect } from 'react';
import style from './timer-to-submit.module.css';

type Props = {
  setLink: () => void;
};

const TimerToSubmit: FC<Props> = ({ setLink }) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    console.log(timer);
    if (timer > 0) {
      setTimeout(() => {
        setTimer(() => timer - 1);
      }, 1000);
    } else {
      setLink(true);
    }
  }, [timer]);

  return <span className={style.counter}>{`отправить запрос ещё раз через ${timer} сек.`}</span>;
};

export default TimerToSubmit;
