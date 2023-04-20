// ДОСТАЕМ ОШИБКИ ИЗ ERR И РАСКИДЫВАЕМ ПО КЛЮЧАМ/ИМЕНАМ ПОЛЕЙ С СЕТТЕРОМ ИЗ useFrom
export function handleErrors(err: any, setError: any): void {
  Object.keys(err).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(err, key)) {
      setError(key as any, {
        type: 'server',
        message: err[key],
      });
    }
  });
}
