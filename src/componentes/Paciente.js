import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../hojas estilos/Paciente.css";

const Paciente = () => {
  return (
    <div className="container-general-paciente">
      <h2 className="texto-ruta">PACIENTE /</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className="row text-center">
        <div className="col-md-4">
          <div className="tres-cuadros-informacion">
            <i className="bi bi-person-circle display-4 text-primary"></i>
            <i class="bx bxs-user-account"></i>
            <h5 className="titulo-informacion">PACIENTES</h5>
            <p className="texto-cuadros">
              Registro de Atención Médica, Agendamiento, Consulta y
              actualización de datos personales y de contacto de sus pacientes.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="tres-cuadros-informacion">
            <i className="bi bi-gear-fill display-4 text-primary"></i>
            <i class="bx bxs-spreadsheet"></i>
            <h5 className="titulo-informacion">ADMINISTRACIÓN</h5>
            <p className="texto-cuadros">
              Administre su IPS o Consultorio, Adicione médicos, modifique los
              datos de su empresa, adicione usuarios de acceso, cambie su clave,
              registre nuevas EPS en convenio, etc.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="tres-cuadros-informacion">
            <i className="bi bi-file-earmark-text-fill display-4 text-primary"></i>
            <i class="bx bxs-file-pdf"></i>
            <h5 className="titulo-informacion">INFORMES</h5>
            <p className="texto-cuadros">
              Genere reportes de Agenda, Reporte de Recaudos y Citas atendidas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paciente;
