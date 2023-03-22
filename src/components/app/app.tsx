import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import AuthenticationPage from '../../pages/auth/authentication-page/authentication-page';
import RegistrationPage from '../../pages/auth/registration-page/registration-page';
import SuccessRegistrationPage from '../../pages/auth/success-registration-page/success-registration-page';
import VerifyEmailPage from '../../pages/auth/verify-email-page/verify-email-page';
import GoogleAuthPage from '../../pages/auth/google-auth-page/google-auth-page';
import ForgotPasswordPage from '../../pages/auth/forgot-password-page/forgot-password-page';
import ResetPasswordPage from '../../pages/auth/reset-password-page/reset-password-page';
import ProfilePage from '../../pages/profile-page/profile-page';
import Layout from '../../pages/layout/layout';
import AuthLayout from '../../pages/auth/layout/layout';
import ResendPage from '../../pages/auth/resend-page/resend-page';
import UserPage from '../../pages/user-page/user-page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/user" element={<UserPage />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthenticationPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="password/reset" element={<ForgotPasswordPage />} />
        <Route path="password/reset/confirm/:id/:confirmCode" element={<ResetPasswordPage />} />
        <Route path="email/confirm/:confirmCode" element={<VerifyEmailPage />} />
        <Route path="mail" element={<AuthLayout />}>
          <Route path="resend-register" element={<ResendPage base="mail" />} />
          <Route path="resend-password" element={<ResendPage base="password" />} />
        </Route>
        <Route path="google/code/" element={<GoogleAuthPage />} />
        <Route path="success" element={<SuccessRegistrationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
