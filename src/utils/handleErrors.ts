// ДОСТАЕМ ОШИБКИ ИЗ ERR И РАСКИДЫВАЕМ ПО КЛЮЧАМ/ИМЕНАМ ПОЛЕЙ С СЕТТЕРОМ ИЗ useFrom
export function handleErrors(err: any, setError: any): void {
  if (typeof err !== 'object' || err === null) {
    setError('error', {
      type: 'server',
      message: 'An unknown error has occurred',
    });
    return;
  }
  // СТОП на non-field errors
  if (err.non_field_errors) {
    return;
  }
  Object.keys(err).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(err, key)) {
      setError(key as any, {
        type: 'server',
        message: err[key],
      });
    }
  });
}
