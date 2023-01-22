export const authenticationPageScheme = {
  email: {
    pattern: /[a-zA-Z]/,
  },
  password: {
    minLength: 8,
    maxLength: 40,
  },
};

export const registrationPageScheme = {
  user: {
    minLength: 5,
    maxLength: 40,
    pattern: /[^\s]+[а-яА-ЯёЁa-zA-Z\-\s]+[^\s$]/,
  },
  email: {
    pattern: /[а-яА-Я]/,
  },
  password: {
    minLength: 5,
    maxLength: 40,
  },
};
