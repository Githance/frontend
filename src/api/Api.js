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
}

export default new Api();
