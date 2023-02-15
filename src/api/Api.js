/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
import axios from "axios";

class Api {
  #authAxios;
  #googleAuthUrl;
  #loginUser;
  #registerUser;
  #confirmEmail;

  constructor() {
    this.#authAxios = axios.create({
      baseURL: "https://dev.githance.com/api/v1/auth",
    });
    this.#googleAuthUrl = "/google/login/";
    this.#loginUser = "/login/";
    this.#registerUser = "/registration/";
    this.#confirmEmail = "/verify-email/";
  }

  checkResponse(res) {
    return res.data;
  }

  googleAuthRequest(googleCode) {
    return this.#authAxios
      .post(this.#googleAuthUrl, { code: googleCode })
      .then(this.checkResponse);
  }

  userRegisterRequest(userData) {
    return this.#authAxios
      .post(this.#registerUser, {
        email: userData.email,
        password1: userData.password,
        password2: userData.password,
        name: userData.name,
      })
      .then(this.checkResponse);
  }

  userLoginRequest(userData) {
    return this.#authAxios
      .post(this.#loginUser, userData)
      .then(this.checkResponse);
  }

  confirmEmailRequest(userEmail) {
    return this.#authAxios
      .post(this.#confirmEmail, { key: userEmail })
      .then(this.checkResponse);
  }
}

export default new Api();
