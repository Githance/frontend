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

export type SelectedUserResponce = {
  id: number;
  name: string;
  telegram: string;
  portfolio_url: string;
  summary_url: string;
  bio: string;
};

export type StatusType = 'idea' | 'vacancy' | 'in_progress' | 'closed';

export type PrimaryProject = {
  id: number;
  name: string;
  status: StatusType;
  intro: string;
};

export type SecondaryProject = {
  id: number;
  name: string;
  status: StatusType;
};

export type GetSecondaryProject = {
  count: number;
  next: string | null;
  previous: string | null;
  results: SecondaryProject[];
};

export type GetPrimaryProject = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PrimaryProject[];
};

export type TProject = {
  id: number;
  name: string;
  intro: string;
  description: string;
  status: StatusType;
  owner: {
    id: number;
    name: string;
  };
  telegram: string;
  email: string;
};
