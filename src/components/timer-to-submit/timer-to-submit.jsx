/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import style from "./timer-to-submit.module.css";

function TimerToSubmit() {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(() => (timer >= 1 ? timer - 1 : 0));
    }, 1000);
  }, [timer]);

  return <span className={style.counter}>{timer}</span>;
}

export default TimerToSubmit;
