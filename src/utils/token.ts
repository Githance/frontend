class Token {
  parseToken(name: string) {
    const base64Url = name.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );

    const token = JSON.parse(jsonPayload);

    return token;
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
