import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";
import AuthenticationPage from "../../pages/authentication-page/authentication-page";
import RegistrationPage from "../../pages/registration-page/registration-page";
import SuccessRegistrationPage from "../../pages/success-registration-page/success-registration-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<AuthenticationPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/success" element={<SuccessRegistrationPage />} />
    </Routes>
  );
}

export default App;
