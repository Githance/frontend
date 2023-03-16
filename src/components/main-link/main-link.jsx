import { useState, useCallback } from "react";
import style from "./main-link.module.css";
import { AnchorIcon, CheckIcon } from "../UI";

const MainLink = ({ link, children, onChange, onSubmit }) => {
  const [disabledInput, setDisabledInput] = useState(true);

  const changeInput = useCallback(() => {
    console.log("change");
    setDisabledInput((prevValue) => !prevValue);
  }, [disabledInput]);

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <fieldset className={style.fieldset}>
        {disabledInput ? (
          <a href={link}>{children}</a>
        ) : (
          <input type="text" onChange={onChange} />
        )}
        {disabledInput ? (
          <button type="button" onClick={changeInput}>
            <AnchorIcon size="small" />
          </button>
        ) : (
          <button type="submit">
            <CheckIcon size="small" />
          </button>
        )}
      </fieldset>
    </form>
  );
};

export default MainLink;
