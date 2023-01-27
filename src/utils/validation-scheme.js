export const authenticationPageScheme = {
  email: {
    pattern: { value: /[a-zA-Z]/, message: "Текст сообщения" },
  },
  password: {
    minLength: { value: 8, message: "Минимум 8 символов" },
    maxLength: { value: 40, message: "Максимум 40 символов" },
  },
};

export const registrationPageScheme = {
  user: {
    minLength: { value: 8, message: "Минимум 8 символов" },
    maxLength: { value: 40, message: "Максимум 40 символов" },
    pattern: {
      value: /[^\s]+[а-яА-ЯёЁa-zA-Z\-\s]+[^\s$]/,
      message: "Текст сообщения",
    },
  },
  email: {
    pattern: { value: /[a-zA-Z]/, message: "Текст сообщения" },
  },
  password: {
    minLength: { value: 8, message: "Минимум 8 символов" },
    maxLength: { value: 40, message: "Максимум 40 символов" },
  },
};
