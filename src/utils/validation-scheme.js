export const authenticationPageScheme = {  
  password: {
    minLength: { value: 8, message: "Минимум 8 символов" },
  },
};

export const registrationPageScheme = {
  user: {
    minLength: { value: 8, message: "Минимум 8 символов" },    
  },  
  password: {
    minLength: { value: 8, message: "Минимум 8 символов" },    
  },
};
