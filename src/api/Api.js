class Api {
  #baseUrl;  

  constructor() {
    this.#baseUrl = "https://githance.com:1443/api/v1/auth";    
  }
}

export default new Api();
