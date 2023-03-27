import axios, { AxiosResponse } from 'axios';

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

export type ResetPasswordType = {
  email: string;
};

export type ConfirmPasswordType = {
  new_password1: string | undefined;
  new_password2: string | undefined;
  uid: string | undefined;
  token: string | undefined;
};

export type ConfirmEmailType = {
  key: string;
};

export type ResendEmail = {
  email: string;
};

class Api {
  #authAxios;
  #googleAuthUrl;
  #loginUser;
  #logoutUser;
  #resetPassword;
  #confirmNewPassword;
  #registerUser;
  #confirmEmail;
  #resendEmail;

  constructor() {
    this.#authAxios = axios.create({
      baseURL: 'https://dev.githance.com/api/v1/auth',
    });
    this.#googleAuthUrl = '/google/login/';
    this.#loginUser = '/login/';
    this.#logoutUser = '/logout/';
    this.#resetPassword = '/password/reset/';
    this.#confirmNewPassword = '/password/reset/confirm/';
    this.#registerUser = '/registration/';
    this.#confirmEmail = '/verify-email/';
    this.#resendEmail = '/resend-email/';
  }

  checkResponse(res: AxiosResponse) {
    return res.data;
  }

  googleAuthRequest(googleCode: string) {
    return this.#authAxios.post(this.#googleAuthUrl, { code: googleCode }).then(this.checkResponse);
  }

  userRegisterRequest(userData: RegisterType) {
    return this.#authAxios
      .post(this.#registerUser, {
        email: userData.email,
        password1: userData.password1,
        password2: userData.password1,
        name: userData.name,
      })
      .then(this.checkResponse);
  }

  userLoginRequest(userData: LoginType) {
    return this.#authAxios.post(this.#loginUser, userData).then(this.checkResponse);
  }

  userLogoutRequest() {
    return this.#authAxios.post(this.#logoutUser).then(this.checkResponse);
  }

  userResetPasswordRequest(userEmail: ResetPasswordType) {
    return this.#authAxios.post(this.#resetPassword, userEmail).then(this.checkResponse);
  }

  userConfirmPasswordRequest(userData: ConfirmPasswordType) {
    return this.#authAxios.post(this.#confirmNewPassword, userData).then(this.checkResponse);
  }

  confirmEmailRequest(userEmail: ConfirmEmailType) {
    return this.#authAxios.post(this.#confirmEmail, { key: userEmail }).then(this.checkResponse);
  }

  resendEmailRequest(userEmail: ResendEmail) {
    return this.#authAxios.post(this.#resendEmail, userEmail).then(this.checkResponse);
  }
}

export default new Api();
