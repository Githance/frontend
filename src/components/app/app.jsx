import { Route, Routes } from "react-router-dom";
import Header from "../header/header";
import AuthorizationPage from "../authorization-page/authorization-page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/authorization" element={<AuthorizationPage />} />
      </Routes>
    </>
  );
}

export default App;
