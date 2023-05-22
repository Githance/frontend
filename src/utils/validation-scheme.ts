const minLength = { value: 8, message: 'Минимум 8 символов' };
/* const maxLength = { value: 30, message: 'Максимум 30 символов' }; */

export const RequireValidationScheme = { required: 'Заполни меня' };
export const PassValidationScheme = { required: 'Заполни меня', minLength: minLength };
export const TextareaValidationScheme = {
  required: 'Заполни меня',
  minLength: { value: 3, message: 'Минимум 3 символа' },
  maxLength: { value: 300, message: 'Максимум 300 символов' },
};
