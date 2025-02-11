import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "../componentes/PrincipalFit";
import Sesion from "../componentes/LoginSesion";
//import AgendarCita from "../componentes/AgendarCita";
//import Paciente from "../componentes/Paciente";
//import MirarUsuario from "../componentes/MirarUsuario";
//import Registro from "../componentes/Registro";
import Cookies from "universal-cookie";
import ProtectedRoute from "../utils/ProtectedRoute";
import ProtectedRouteDos from "../utils/ProtectedRouteDos";

const cookies = new Cookies();

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<ProtectedRoute canActivate={cookies.get("Usuario")} />}
        >
          <Route exact path="/principal" element={<Principal />} />
        </Route>

        <Route
          element={<ProtectedRouteDos canActivate={!cookies.get("Usuario")} />}
        >
          <Route exact path="/" element={<Sesion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
