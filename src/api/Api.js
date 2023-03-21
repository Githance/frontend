/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
import axios from 'axios';

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

  checkResponse(res) {
    return res.data;
  }

  googleAuthRequest(googleCode) {
    return this.#authAxios.post(this.#googleAuthUrl, { code: googleCode }).then(this.checkResponse);
  }

  userRegisterRequest(userData) {
    return this.#authAxios
      .post(this.#registerUser, {
        email: userData.email,
        password1: userData.password1,
        password2: userData.password1,
        name: userData.name,
      })
      .then(this.checkResponse);
  }

  userLoginRequest(userData) {
    return this.#authAxios.post(this.#loginUser, userData).then(this.checkResponse);
  }

  userLogoutRequest() {
    return this.#authAxios.post(this.#logoutUser).then(this.checkResponse);
  }

  userResetPasswordRequest(userEmail) {
    return this.#authAxios.post(this.#resetPassword, userEmail).then(this.checkResponse);
  }

  userConfirmPasswordRequest(userData) {
    return this.#authAxios.post(this.#confirmNewPassword, userData).then(this.checkResponse);
  }

  confirmEmailRequest(userEmail) {
    return this.#authAxios.post(this.#confirmEmail, { key: userEmail }).then(this.checkResponse);
  }

  resendEmailRequest(userEmail) {
    return this.#authAxios.post(this.#resendEmail, userEmail).then(this.checkResponse);
  }
}

export default new Api();
