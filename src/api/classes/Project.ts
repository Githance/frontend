import axios, { AxiosResponse } from 'axios';
import token from '../../utils/token';

class Project {
  private token = `Bearer ${token.getToken('accessToken')}`;
  private projectAxios = axios.create({
    baseURL: 'https://dev.githance.com/api/v1/projects/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: this.token,
    },
  });
  private projectID(id: number) {
    return `/${id}/`;
  }
  private checkResponse(res: AxiosResponse) {
    console.log(res);
    return res.data;
  }
  public getAllProjectsRequest = () => this.projectAxios.get('/').then(this.checkResponse);

  public createProjectRequest(data: any) {
    return this.projectAxios.post('/', data).then(this.checkResponse);
  }

  public getProjectByIDRequest(id: any) {
    return this.projectAxios.get(this.projectID(id)).then(this.checkResponse);
  }
  public updateProjectByIDRequest({ id, data }: any) {
    return this.projectAxios.patch(this.projectID(id), data).then(this.checkResponse);
  }
  public deleteProjectByIDRequest(id: any) {
    return this.projectAxios.delete(this.projectID(id)).then(this.checkResponse);
  }
}

export default Project;
/* private selectedProject(id: number) {
    return `/${id}/`;
  }
  private participantsList(id: number) {
    return `/${id}/participants/`;
  } */
