import axios from "axios";

class Api {
  #authAxios;

  #googleAuthUrl;

  constructor() {
    this.#authAxios = axios.create({
      baseURL: "https://githance.com:1443/api/v1/auth",
    });
    this.#googleAuthUrl = "/google/login/";
  }

  googleAuthRequest(googleCode) {
    return this.#authAxios.post(this.#googleAuthUrl, { code: googleCode });
  }
}

export default new Api();
