import "./index.css";
import App from "./App.jsx";
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Page404 from "./components/Page404/Page404.jsx";
import Login from "./components/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      // 404 Page
      { path: "*", element: <Page404 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider RouterProvider router={router}>
    <App />
  </RouterProvider>
);
