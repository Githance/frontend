import { Route, Routes } from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthenticationPage from "../authentication-page/authentication-page";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/authentication" element={<AuthenticationPage />} />
    </Routes>
  );
}

export default App;
