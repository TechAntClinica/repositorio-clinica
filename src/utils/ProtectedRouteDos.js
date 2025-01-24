import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
 
const ProtectedRouteDos = ({
    canActivate,
    redirectPath='/funciones_administrador'
}) => {
    if (!canActivate){
        if(cookies.get('Cargo') === 'Administrador'){
        redirectPath='/funciones_administrador'
        return <Navigate to={redirectPath} replace />
        }else{
            redirectPath='/funciones_colaborador'
            return <Navigate to={redirectPath} replace />
        }
    }
    return <Outlet />;
}

export default ProtectedRouteDos