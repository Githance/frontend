/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { useState, useCallback, useMemo } from "react";

export default function useForm(formData) {
  const [form, setForm] = useState(formData);

  function checkValidInput(value) {
    if (value.length > 7) {
      return true;
    }
    return false;
  }

  function checkValidForm() {
    const array = [];
    for (const key in form) {
      array.push(form[key].valid);
    }
    return array.length === 0 ? false : array.every((item) => item === true);
  }

  const onFormChange = useCallback(
    (e) => {
      setForm({
        ...form,
        [e.target.name]: {
          value: e.target.value,
          valid: checkValidInput(e.target.value),
        },
      });
    },
    [form]
  );

  const isValid = useMemo(() => checkValidForm());

  return { onFormChange, form, isValid };
}
