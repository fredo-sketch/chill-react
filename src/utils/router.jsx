import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Login from "../pages/Login/login.jsx";
import Register from "../pages/Register/register.jsx";
import Page404 from "../pages/404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
