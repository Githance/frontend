/* eslint-disable react/self-closing-comp */
import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";
import AuthWrapper from "../../pages/auth-wrapper";
import AuthenticationPage from "../../pages/authentication-page/authentication-page";
import RegistrationPage from "../../pages/registration-page/registration-page";
import SuccessRegistrationPage from "../../pages/success-registration-page/success-registration-page";
import VerifyEmailPage from "../../pages/verify-email-page/verify-email-page";
import GoogleAuthPage from "../../pages/google-auth-page/google-auth-page";
import SentMailPage from "../../pages/sent-mail-page/sent-mail-page";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<AuthWrapper />}>
        <Route index element={<AuthenticationPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="password/reset" element={<ForgotPasswordPage />} />
        <Route
          path="email/confirm/:confirmCode"
          element={<VerifyEmailPage />}
        />
        <Route path="mail" element={<SentMailPage />} />
        <Route path="google/code/" element={<GoogleAuthPage />} />
        <Route path="success" element={<SuccessRegistrationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
