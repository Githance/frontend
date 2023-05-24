import axios, { AxiosResponse } from 'axios';
import token from '../../utils/token';

class Vacancy {
  private token = `Bearer ${token.getToken('accessToken')}`;
  private vacancyAuthAxios = axios.create({
    baseURL: 'https://dev.githance.com/api/v1/vacancies/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: this.token,
    },
  });

  private vacanciesID(id: number) {
    return `/${id}/`;
  }
  private checkResponse(res: AxiosResponse) {
    console.log(res);
    return res.data;
  }
  // ПОЛУЧАЕМ ВЕС ОПУБЛИКОВАННЫЕ ВАКАНСИИ
  public getAllPublicVacanciesRequest() {
    return this.vacancyAuthAxios.get('/').then(this.checkResponse);
  }
  // ПОЛУЧАЕМ ВАКАНСИЮ ПО ID
  public getVacancyByIDRequest(id: any) {
    return this.vacancyAuthAxios.get(this.vacanciesID(id)).then(this.checkResponse);
  }
  // ПАТЧИМ ВАКАНСИЮ ПО ID
  public updateVacancyByIDRequest({ id, data }: any) {
    return this.vacancyAuthAxios.patch(this.vacanciesID(id), data).then(this.checkResponse);
  }
  // УДАЛЯЕМ ВАКАНСИЮ ПО ID
  public deleteVacancyByIDRequest(id: any) {
    return this.vacancyAuthAxios.delete(this.vacanciesID(id)).then(this.checkResponse);
  }
}

export default Vacancy;
