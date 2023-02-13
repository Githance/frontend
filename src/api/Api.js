class Api {
  #url;

  #headers;

  constructor(url, headers) {
    this.#url = url;
    this.#headers = headers;
  }
}

export default new Api();
