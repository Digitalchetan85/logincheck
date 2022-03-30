import { Outlet } from "react-router-dom";
import Home from "../Home";
import Login from "../LoginSystem/Login";
import Register from "../LoginSystem/Register";

const useAuth = () => {
  const user = localStorage.getItem("auth_token");
  const admin = localStorage.getItem("admin");
//   console.log(user , admin === "0" || admin === "1")
//   console.log(user && admin === "0" || admin === "1")
//   console.log(user && admin)
  return user && admin;
};

const RegisterProtectedRoute = () => {
  const isAuth = useAuth();
//   console.log(isAuth)
  return isAuth === null ? <Register /> : <Home />;
};

export default RegisterProtectedRoute;
