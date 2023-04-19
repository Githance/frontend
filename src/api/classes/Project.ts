import axios, { AxiosResponse } from 'axios';
import token from '../../utils/token';

import {
  LoginType,
  RegisterType,
  ResetPasswordType,
  ConfirmPasswordType,
  ConfirmEmailType,
  ResendEmailType,
} from '../api-types';

class Project {
  private token = `Bearer ${token.getToken('accessToken')}`;
  private projectAxios = axios.create({
    baseURL: 'https://dev.githance.com/api/v1/projects/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: this.token,
    },
  });

  private checkResponse(res: AxiosResponse) {
    console.log(res);
    return res.data;
  }
  public getProjectsRequest = () => this.projectAxios.get('/').then(this.checkResponse);

  public createProjectRequest(data: any) {
    return this.projectAxios.post('/', data).then(this.checkResponse);
  }
}

export default Project;
/* private selectedProject(id: number) {
    return `/${id}/`;
  }
  private participantsList(id: number) {
    return `/${id}/participants/`;
  } */
