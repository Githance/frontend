export const PATH = {
  HOME: '/', // BASIC
  AUTH: '/auth', // BASIC
  AUTH_MAIL: '/auth/mail', // BASIC
  PROFILE: 'profile',
  USER: 'user',

  PROJECT: '/project', // BASIC
  PROJECT_D: '/project/:id',
  PROJECT_D_VACANCY: '/project/:id/vacancy',
  PROJECT_D_PARTICIPANTS: '/project/:id/participants',
  REGISTRATION: 'registration',
  PASSWORD_RESET: 'password/reset',
  PASSWORD_RESET_CONFIRM_D: 'password/reset/confirm/:id/:confirmCode',
  EMAIL_COMFIRM_D: 'email/confirm/:confirmCode',
  GOOGLE_CODE: 'google/code/',
  SUCCESS: 'success',
  RESEND_REGISTER: 'resend-register',
  RESEND_PASSWORD: 'resend-password',
};
