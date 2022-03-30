import { Outlet } from "react-router-dom";
import Login from "../LoginSystem/Login";

const useAuth = () => {
  const user = localStorage.getItem("auth_token");
  const admin = localStorage.getItem("admin");
  // console.log("user", user || admin)
//   console.log(user && admin === "1")
  return user && admin;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();
//   console.log(isAuth)
  return isAuth === null ? <Login /> : <Outlet />;
};

export default ProtectedRoute;
