import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";
import AuthenticationPage from "../../pages/authentication-page/authentication-page";
import RegistrationPage from "../../pages/registration-page/registration-page";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/authentication" element={<AuthenticationPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
}

export default App;
