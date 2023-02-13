import axios from "axios";

class Api {
  #baseUrl;

  #googleAuthUrl;

  constructor() {
    this.#baseUrl = "https://githance.com:1443/api/v1/auth";
    this.#googleAuthUrl = `${this.#baseUrl}/google/login/`;
  }

  googleAuthRequest(googleCode) {
    return axios.post(this.#googleAuthUrl, { code: googleCode });
  }
}

export default new Api();
