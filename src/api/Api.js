import axios from "axios";

class Api {
  #authAxios;

  #googleAuthUrl;

  #registerUser;

  constructor() {
    this.#authAxios = axios.create({
      baseURL: "https://dev.githance.com/api/v1/auth",
    });
    this.#googleAuthUrl = "/google/login/";
    this.#registerUser = "/registration/";
  }

  googleAuthRequest(googleCode) {
    this.#authAxios.post(this.#googleAuthUrl, { code: googleCode });
  }

  userRegisterRequest(userData) {
    this.#authAxios.post(this.#registerUser, {
      email: userData.email,
      password1: userData.password,
      password2: userData.password,
      name: userData.name,
    });
  }
}

export default new Api();
