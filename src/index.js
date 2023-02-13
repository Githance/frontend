import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/app";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
);
