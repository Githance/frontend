import axios, { AxiosResponse } from 'axios';
import {
  LoginType,
  RegisterType,
  ResetPasswordType,
  ConfirmPasswordType,
  ConfirmEmailType,
  ResendEmailType,
} from '../api-types';

class Auth {
  private authAxios = axios.create({
    baseURL: 'https://dev.githance.com/api/v1/auth',
    withCredentials: true,
  });
  private googleAuth = '/google/login/';
  private loginUser = '/login/';
  private logoutUser = '/logout/';
  private resetPassword = '/password/reset/';
  private confirmNewPassword = '/password/reset/confirm/';
  private registerUser = '/registration/';
  private confirmEmail = '/verify-email/';
  private resendEmail = '/resend-email/';
  private refreshToken = '/token/refresh/';

  private checkResponse(res: AxiosResponse) {
    return res.data;
  }

  public googleAuthRequest(googleCode: string) {
    return this.authAxios.post(this.googleAuth, { code: googleCode }).then(this.checkResponse);
  }

  public userRegisterRequest(userData: RegisterType) {
    return this.authAxios
      .post(this.registerUser, {
        email: userData.email,
        password1: userData.password1,
        password2: userData.password1,
        name: userData.name,
      })
      .then(this.checkResponse);
  }

  /* TODO Разобраться с опцией credentials в axios */

/*   public userLoginRequest(userData: LoginType) {
    return this.authAxios
      .post(this.loginUser, userData, { withCredentials: true })
      .then(this.checkResponse);
  } */

   public userLoginRequest(userData: LoginType) {
    return fetch('https://dev.githance.com/api/v1/auth/login/', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userData.email, password: userData.password }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
       
        Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }  

  public userLogoutRequest() {
    return this.authAxios.post(this.logoutUser).then(this.checkResponse);
  }

  public userResetPasswordRequest(userEmail: ResetPasswordType) {
    return this.authAxios.post(this.resetPassword, { email: userEmail }).then(this.checkResponse);
  }

  public userConfirmPasswordRequest(userData: ConfirmPasswordType) {
    return this.authAxios.post(this.confirmNewPassword, userData).then(this.checkResponse);
  }

  public confirmEmailRequest(userKey: ConfirmEmailType) {
    return this.authAxios.post(this.confirmEmail, { key: userKey }).then(this.checkResponse);
  }

  public resendEmailRequest(userEmail: ResendEmailType) {
    return this.authAxios.post(this.resendEmail, { email: userEmail }).then(this.checkResponse);
  }

  public refreshTokenRequest() {
    return this.authAxios.post(this.refreshToken).then(this.checkResponse);
  }
}

export default Auth;
