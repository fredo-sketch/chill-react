import { createBrowserRouter } from "react-router-dom"; // Pastikan import dari react-router-dom
import App from "../App.jsx";
import Login from "../pages/Login/login.jsx";
import Register from "../pages/Register/register.jsx";
import Page404 from "../pages/404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Ini untuk halaman Home/Beranda utamamu nanti
  },
  {
    path: "/login",
    element: <Login />, // Rute Login berdiri sendiri
  },
  {
    path: "/register",
    element: <Register />, // Rute Register berdiri sendiri
  },
  {
    path: "*",
    element: <Page404 />, // Rute untuk halaman tidak ditemukan (404)
  },
]);

export default router;
