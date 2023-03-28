import axios, { AxiosResponse } from 'axios';

class Users {
  private usersAxios = axios.create({
    baseURL: 'https://dev.githance.com/api/v1/users',
  });

  private checkResponse(res: AxiosResponse) {
    return res.data;
  }
}

export default new Users();
