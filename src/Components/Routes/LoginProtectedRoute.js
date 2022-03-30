import { Outlet } from "react-router-dom";
import Home from "../Home";
import Login from "../LoginSystem/Login";

const useAuth = () => {
  const user = localStorage.getItem("auth_token");
  const admin = localStorage.getItem("admin");
//   console.log(user , admin === "0" || admin === "1")
//   console.log(user && admin === "0" || admin === "1")
//   console.log(user && admin)
  return user && admin;
};

const LoginProtectedRoute = () => {
  const isAuth = useAuth();
//   console.log(isAuth)
  return isAuth === null ? <Login /> : <Home />;
};

export default LoginProtectedRoute;
