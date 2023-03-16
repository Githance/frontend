/* eslint-disable react/self-closing-comp */
import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";
import AuthWrapper from "../../pages/auth-wrapper";
import AuthenticationPage from "../../pages/authentication-page/authentication-page";
import RegistrationPage from "../../pages/registration-page/registration-page";
import SuccessRegistrationPage from "../../pages/success-registration-page/success-registration-page";
import VerifyEmailPage from "../../pages/verify-email-page/verify-email-page";
import GoogleAuthPage from "../../pages/google-auth-page/google-auth-page";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password-page";
import ResetPasswordPage from "../../pages/reset-password-page/reset-password-page";
import ResendPasswordMailPage from "../../pages/resend-password-mail-page/resend-password-mail-page";
import ResendRegisterMailPage from "../../pages/resend-register-mail-page/resend-register-mail-page";
import ProfilePage from "../../pages/profile-page/profile-page";
import Layout from '../../pages/layout/layout'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="/auth" element={<AuthWrapper />}>
        <Route index element={<AuthenticationPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="password/reset" element={<ForgotPasswordPage />} />
        <Route
          path="password/reset/confirm/:id/:confirmCode"
          element={<ResetPasswordPage />}
        />
        <Route
          path="email/confirm/:confirmCode"
          element={<VerifyEmailPage />}
        />
        <Route path="mail" element={<AuthWrapper />}>
          <Route path="resend-register" element={<ResendRegisterMailPage />} />
          <Route path="resend-password" element={<ResendPasswordMailPage />} />
        </Route>
        <Route path="google/code/" element={<GoogleAuthPage />} />
        <Route path="success" element={<SuccessRegistrationPage />} />
      </Route>
      <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
