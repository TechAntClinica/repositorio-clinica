import { Navigate, Outlet } from "react-router-dom";
//import Cookies from "universal-cookie";
//const cookies = new Cookies();

const ProtectedRouteDos = ({ canActivate, redirectPath = "/principal" }) => {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRouteDos;
