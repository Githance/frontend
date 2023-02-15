/* eslint-disable class-methods-use-this */
import axios from "axios";

class Api {
  #authAxios;

  #googleAuthUrl;

  constructor() {
    this.#authAxios = axios.create({
      baseURL: "https://dev.githance.com/api/v1/auth",
    });
    this.#googleAuthUrl = "/google/login/";
  }

  googleAuthRequest(googleCode) {
    return this.#authAxios.post(this.#googleAuthUrl, { code: googleCode });
  }

  userRegisterRequest(userData) {
    return this.#authAxios.post(this.#googleAuthUrl, {
      email: userData.email,
      password1: userData.password,
      password2: userData.password,
      name: userData.name,
    });
  }
}

export default new Api();
