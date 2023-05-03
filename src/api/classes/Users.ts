import axios, { AxiosResponse } from 'axios';
import { CurrentUserRequest } from '../api-types';

class Users {
  private usersAxios = axios.create({
    baseURL: 'https://dev.githance.com/api/v1/users',
  });
  private currentUser = '/me/';

  private selectedUser(id: string | undefined) {
    return `/${id}/`;
  }
  private selectedUserProjects(id: number) {
    return `/${id}/projects/`;
  }

  private checkResponse(res: AxiosResponse) {
    return res.data;
  }

  public getCurrenUserDataRequest(token: string | null) {
    return this.usersAxios(this.currentUser, {
      headers: { 'Content-Type': 'application/json;charset=utf-8', Authorization: token },
    }).then(this.checkResponse);
  }

  public patchCurrenUserDataRequest(data: CurrentUserRequest, token: string) {
    return this.usersAxios
      .patch(this.currentUser, data, {
        headers: { 'Content-Type': 'application/json;charset=utf-8', Authorization: token },
      })
      .then(this.checkResponse);
  }

  public getSelectedUserDataRequest(id: string | undefined) {
    return this.usersAxios(this.selectedUser(id)).then(this.checkResponse);
  }
}

export default Users;
