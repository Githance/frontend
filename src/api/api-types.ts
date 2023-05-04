// Auth class
export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = {
  email: string;
  password1: string;
  password2?: string;
  name: string;
};

export type ResetPasswordType = string | null;

export type ConfirmPasswordType = {
  new_password1: string;
  new_password2: string;
  uid?: string;
  token?: string;
};

export type ConfirmEmailType = string;

export type ResendEmailType = string | null;

export type CurrentUserRequest = {
  name?: string;
  telegram?: string;
  portfolio_url?: string;
  summary_url?: string;
  bio?: string;
};

export type CurrentUserResponce = {
  email: string;
  id: number;
  name: string;
  telegram: string;
  portfolio_url: string;
  summary_url: string;
  bio: string;
};
