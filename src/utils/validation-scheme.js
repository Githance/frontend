export const authenticationPageScheme = {
  email: {
    pattern: { value: /[a-zA-Z]/, message: "Только латиница" },
  },
  password: {
    minLength: { value: 8, message: "Минимум 8 символов" },
  },
};

export const registrationPageScheme = {
  user: {
    minLength: { value: 8, message: "Минимум 8 символов" },
    pattern: {
      value: /[^\s]+[а-яА-ЯёЁa-zA-Z\-\s]+[^\s$]/,
      message: "Только латиница и кирилица",
    },
  },
  email: {
    pattern: { value: /[a-zA-Z]/, message: "Только латиница" },
  },
  password: {
    minLength: { value: 8, message: "Минимум 8 символов" },    
  },
};
