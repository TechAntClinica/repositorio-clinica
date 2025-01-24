import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "../componentes/PrincipalFit";
import Sesion from "../componentes/LoginSesion";
import AgendarCita from "../componentes/AgendarCita";
import Paciente from "../componentes/Paciente";
//import Cookies from "universal-cookie";
//import ProtectedRoute from "../utils/ProtectedRoute";
//import ProtectedRouteDos from "../utils/ProtectedRouteDos";

//const cookies = new Cookies();

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/principal" element={<Principal />} />
        <Route exact path="/" element={<Sesion />} />
        <Route exact path="/agendarCita" element={<AgendarCita />} />
        <Route exact path="/paciente" element={<Paciente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
