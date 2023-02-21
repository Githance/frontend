/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import style from "./timer-to-submit.module.css";

function TimerToSubmit({ setLink }) {
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

  return (
    <span
      className={style.counter}
    >{`отправить запрос ещё раз через ${timer} сек.`}</span>
  );
}

TimerToSubmit.propTypes = {
  setLink: PropTypes.func.isRequired,
};

export default TimerToSubmit;
