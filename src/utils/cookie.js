/* eslint-disable class-methods-use-this */
class Cookie {
  parseCookie(name) {
    const authToken = name.split("Bearer ")[1];
    return authToken;
  }

  getCookie(name) {
    return localStorage.getItem(name);
  }

  setCookie(name, value) {
    localStorage.setItem(name, value);
  }

  deleteCookie(name) {
    localStorage.removeItem(name);
  }
}

export default new Cookie();
