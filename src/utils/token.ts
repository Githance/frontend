class Token {
  parseToken(name: string) {
    const authToken = name.split('Bearer ')[1];
    return authToken;
  }

  getToken(name: string) {
    return localStorage.getItem(name);
  }

  setToken(name: string, value: string) {
    localStorage.setItem(name, value);
  }

  deleteToken(name: string) {
    localStorage.removeItem(name);
  }
}

export default new Token();
