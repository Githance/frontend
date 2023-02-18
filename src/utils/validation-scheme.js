export const authenticationPageScheme = {  
  password: {
    minLength: { value: 8, message: "Минимум 8 символов" },
  },
};

export const registrationPageScheme = {
  name: {
    minLength: { value: 8, message: "Минимум 8 символов" },    
  },  
  password: {
    minLength: { value: 8, message: "Минимум 8 символов" },    
  },
};
