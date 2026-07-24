import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ContextProvider } from "./context/AppContext.jsx";
import AppRoute from "./route/AppRoute.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <AppRoute />
    <ToastContainer position="bottom-right" />
  </ContextProvider>,
);
