import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Page404 from "./components/Page404/Page404";
import PrivacyPolicy from "./components/LegalPages/PrivacyPolicy";
import TermsAndConditions from "./components/LegalPages/TermsAndConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Signup /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-&-conditions", element: <TermsAndConditions /> },
      { path: "*", element: <Page404 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
