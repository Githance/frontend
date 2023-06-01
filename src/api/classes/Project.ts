import axios, { AxiosResponse } from 'axios';
import token from '../../utils/token';
import { TProject } from '../api-types';

class Project {
  private token = `Bearer ${token.getToken('accessToken')}`;
  private projectAuthAxios = axios.create({
    baseURL: 'https://dev.githance.com/api/v1/projects/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: this.token,
    },
  });
  private projectNoAuthAxios = axios.create({
    baseURL: 'https://dev.githance.com/api/v1/projects/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  private projectID(id: number) {
    return `/${id}/`;
  }
  private participantsListID(id: number) {
    return `/${id}/participants/`;
  }
  private vacanciesID(id: number) {
    return `/${id}/vacancies/?page_size=6`;
  }
  private checkResponse(res: AxiosResponse) {
    console.log(res);
    return res.data;
  }
  public getAllProjectsRequest() {
    return this.projectNoAuthAxios.get('/?page_size=8').then(this.checkResponse);
  }

  public createProjectRequest(data: TProject) {
    console.log(this.token);
    return this.projectAuthAxios.post('/', data).then(this.checkResponse);
  }

  public getProjectByIDRequest(id: any) {
    return this.projectAuthAxios.get(this.projectID(id)).then(this.checkResponse);
  }
  public updateProjectByIDRequest({ id, data }: any) {
    return this.projectAuthAxios.patch(this.projectID(id), data).then(this.checkResponse);
  }
  public deleteProjectByIDRequest(id: any) {
    return this.projectAuthAxios.delete(this.projectID(id)).then(this.checkResponse);
  }
  // !ДОП
  public getParticipantsListIDRequest(id: any) {
    return this.projectAuthAxios.get(this.participantsListID(id)).then(this.checkResponse);
  }
  public getVacanciesIDRequest(id: any) {
    return this.projectAuthAxios.get(this.vacanciesID(id)).then(this.checkResponse);
  }
  public createVacanciesIDRequest({ id, data }: any) {
    return this.projectAuthAxios.post(this.vacanciesID(id), data).then(this.checkResponse);
  }
}

export default Project;
