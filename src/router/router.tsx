import { createBrowserRouter } from 'react-router-dom';
import { PATH } from '../utils/variables';
import {
  Layout,
  UserPage,
  ProfilePage,
  ProjectPage,
  MainPage,
  AuthLayout,
  AuthenticationPage,
  ForgotPasswordPage,
  GoogleAuthPage,
  RegistrationPage,
  ResendPage,
  ResetPasswordPage,
  SuccessRegistrationPage,
  VerifyEmailPage,
} from '../pages/index';
import ProtectedRoute from '~/components/protected-route/protected-route';
import ProjectLayout from '~/pages/project/layout/layout';
import VacancyPage from '~/pages/project/vacancy-page/vacancy-page';
import ParticipantsPage from '~/pages/project/participants-page/participants-page';
const projectRoutes = [
  {
    path: PATH.PROJECT_D,
    element: <ProjectPage />,
  },
  {
    path: PATH.PROJECT_D_VACANCY,
    element: <VacancyPage />,
  },
  {
    path: PATH.PROJECT_D_PARTICIPANTS,
    element: <ParticipantsPage />,
  },
];
const mainRoutes = [
  {
    index: true,
    element: <MainPage />,
  },
  {
    path: PATH.PROFILE,
    element: <ProtectedRoute element={<ProfilePage />} />,
  },
  {
    path: `${PATH.USER}/:id`,
    element: <UserPage />,
  },
  {
    path: PATH.PROJECT,
    element: <ProjectLayout />,
    children: projectRoutes,
  },
];
const authRoutes = [
  {
    index: true,
    element: <AuthenticationPage />,
  },
  {
    path: PATH.REGISTRATION,
    element: <RegistrationPage />,
  },
  {
    path: PATH.PASSWORD_RESET,
    element: <ForgotPasswordPage />,
  },
  {
    path: PATH.PASSWORD_RESET_CONFIRM_D,
    element: <ResetPasswordPage />,
  },
  {
    path: PATH.EMAIL_COMFIRM_D,
    element: <VerifyEmailPage />,
  },
  {
    path: PATH.GOOGLE_CODE,
    element: <GoogleAuthPage />,
  },
  {
    path: PATH.SUCCESS,
    element: <SuccessRegistrationPage />,
  },
];
const authResendRoutes = [
  {
    path: PATH.RESEND_REGISTER,
    element: <ResendPage base="mail" />,
  },
  {
    path: PATH.RESEND_PASSWORD,
    element: <ResendPage base="password" />,
  },
];

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Layout />,
    children: mainRoutes,
  },
  {
    path: PATH.AUTH,
    element: <ProtectedRoute element={<AuthLayout />} onlyUnAuth />,
    children: authRoutes,
  },
  {
    path: PATH.AUTH_MAIL,
    element: <AuthLayout />,
    children: authResendRoutes,
  },
]);
