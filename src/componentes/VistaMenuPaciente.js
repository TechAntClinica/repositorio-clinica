import React, { useState } from "react";
import Registro from "../componentes/Registro";
import MirarUsuario from "../componentes/MirarUsuario";
import "../hojas estilos/VistaMenuPaciente.css";

function App() {
  const [activateBox, setActivateBox] = useState("0");
  //const [selectMenu, setSelectMenu] = useState("");
  console.log(activateBox);

  return (
    <div>
      {activateBox === "0" && (
        <>
          <header>
            <span>PACIENTE / Registro</span>
          </header>
          <select
            className="cuadro-menu-paciente"
            required
            onChange={(e) => setActivateBox(e.target.value)}
          >
            <option value="">MENU PACIENTES</option>
            <option value="">Agendar Cita Médica</option>
            <option value="">Registrar Consulta</option>
            <option value="">Editar Datos</option>
            <option value="">Consultar Formulas</option>
            <option value="">Ingreso de Pagos</option>
            <option href="Nuevo" value="1">
              Nuevo Paciente
            </option>
          </select>
          <MirarUsuario />
        </>
      )}
      {activateBox === "1" && <Registro />}
    </div>
  );
}

export default App;
