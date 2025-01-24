import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
    canActivate,
    redirectPath='/sesion'
}) => {
    if (!canActivate){
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
}

export default ProtectedRoute