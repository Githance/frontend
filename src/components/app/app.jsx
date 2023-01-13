import { Route, Routes } from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthorizationPage from "../authorization-page/authorization-page";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/authorization" element={<AuthorizationPage />} />
    </Routes>
  );
}

export default App;
