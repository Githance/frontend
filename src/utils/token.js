/* eslint-disable class-methods-use-this */
class Token {
  parseToken(name) {
    const authToken = name.split("Bearer ")[1];
    return authToken;
  }

  getToken(name) {
    return localStorage.getItem(name);
  }

  setToken(name, value) {
    localStorage.setItem(name, value);
  }

  deleteToken(name) {
    localStorage.removeItem(name);
  }
}

export default new Token();
