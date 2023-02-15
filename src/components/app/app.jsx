/* eslint-disable react/self-closing-comp */
import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";
import AuthenticationPage from "../../pages/authentication-page/authentication-page";
import RegistrationPage from "../../pages/registration-page/registration-page";
import SuccessRegistrationPage from "../../pages/success-registration-page/success-registration-page";
import VerifyEmailPage from "../../pages/verify-email-page/verify-email-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<AuthenticationPage />}>
        <Route path="google/code/" element={<AuthenticationPage />} />
      </Route>
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/register/verify" element={<VerifyEmailPage />} /> 
      <Route path="/register/success" element={<SuccessRegistrationPage />} />
    </Routes>
  );
}

export default App;
