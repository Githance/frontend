import axios, { AxiosResponse } from 'axios';
import token from '../../utils/token';
import { TProject } from '../../services/slice/project/project-slice';
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
  private checkResponse(res: AxiosResponse) {
    console.log(res);
    return res.data;
  }
  public getAllProjectsRequest() {
    return this.projectNoAuthAxios.get('/').then(this.checkResponse);
  }

  public createProjectRequest(data: TProject) {
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
}

export default Project;
/* private selectedProject(id: number) {
    return `/${id}/`;
  }
  private participantsList(id: number) {
    return `/${id}/participants/`;
  } */
