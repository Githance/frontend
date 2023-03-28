import axios, { AxiosResponse } from 'axios';

class Users {
  private usersAxios = axios.create({
    baseURL: 'https://dev.githance.com/api/v1/users',
  });
  private userData = '/me/';
  private selectedUser(id: number) {
    return `/${id}/`;
  }
  private selectedUserProjects(id: number) {
    return `/${id}/projects/`;
  }

  private checkResponse(res: AxiosResponse) {
    return res.data;
  }
}

export default new Users();
