import React, { useEffect, useState } from "react";
import LogoClinica from "../img/clinica.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../hojas estilos/PrincipalFit.css";
import SuscripcionView from "./AgendarCita";
import PacienteView from "../componentes/Paciente";
import VistaMenuPaciente from "../componentes/VistaMenuPaciente";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const HomePrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDos, setIsOpenDos] = useState(false);
  const [isOpenTres, setIsOpenTres] = useState(false);
  const [isOpenCuatro, setIsOpenCuatro] = useState(false);
  const [isOpenCinco, setIsOpenCinco] = useState(false);
  const [activateBox, setActivateBox] = useState(0);

  // Obtener la URL actual
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleUrlChange);
    window.addEventListener("pushstate", handleUrlChange);
    window.addEventListener("replacestate", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      window.removeEventListener("pushstate", handleUrlChange);
      window.removeEventListener("replacestate", handleUrlChange);
    };
  }, []);

  console.log(currentPath);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenuDos = () => {
    setIsOpenDos(!isOpenDos);
  };
  const toggleMenuTres = () => {
    setIsOpenTres(!isOpenTres);
  };
  const toggleMenuCuatro = () => {
    setIsOpenCuatro(!isOpenCuatro);
  };
  const toggleMenuCinco = () => {
    setIsOpenCinco(!isOpenCinco);
  };

  const ActivarVentana = (numero) => {
    setActivateBox(numero);
  };

  const CerrarSesion = () => {
    cookies.remove("Usuario", { path: "/" });
    cookies.remove("Cargo", { path: "/" });
    window.location.href = "./";
  };

  return (
    <div className="app-container">
      <aside className="sidebar bg-dark text-white">
        <div className="cuadro-logo">
          <img
            className="Logo_Clinica"
            src={LogoClinica}
            alt="Imagen Logo Clinica"
          ></img>
          <h5>HISTORIAS CLÍNICAS</h5>
          <p>jair niebles</p>
        </div>
        <p className="letra-menu">MENÚ</p>
        <nav className="general">
          <div style={{ width: "100%" }}>
            <button className="button-menu" onClick={toggleMenu}>
              <i class="bx bx-cog" style={{ marginRight: "10px" }}></i>
              Configuración IPS <span style={{ float: "right" }}>▼</span>
            </button>
            {isOpen && (
              <div className="menu-cuadro">
                <a className="letras-cuadro" href="#a">
                  I.P.S
                </a>
                <a className="letras-cuadro" href="#w">
                  Médicos
                </a>
                <a className="letras-cuadro" href="#p">
                  EPS
                </a>
                <a className="letras-cuadro" href="#o">
                  Actualizar CUPS
                </a>
                <a className="letras-cuadro" href="#l">
                  Actualizar Vademecum
                </a>
              </div>
            )}
          </div>
          <button className="button-menu" onClick={toggleMenuDos}>
            <i class="bx bxs-user" style={{ marginRight: "10px" }}></i>
            Cuenta <span style={{ float: "right" }}>▼</span>
          </button>
          {isOpenDos && (
            <div className="menu-cuadro">
              <a className="letras-cuadro" href="#w">
                Cambio Clave
              </a>
            </div>
          )}
          <button className="button-menu" onClick={toggleMenuTres}>
            <i class="bx bxs-lock-alt" style={{ marginRight: "10px" }}></i>
            Control de Acceso <span style={{ float: "right" }}>▼</span>
          </button>
          {isOpenTres && (
            <div className="menu-cuadro">
              <a className="letras-cuadro" href="#a">
                Usuarios
              </a>
            </div>
          )}
          <button className="button-menu" onClick={toggleMenuCuatro}>
            <i class="bx bx-clinic" style={{ marginRight: "10px" }}></i>
            Consultorio <span style={{ float: "right" }}>▼</span>
          </button>
          {isOpenCuatro && (
            <div className="menu-cuadro">
              <a
                className="letras-cuadro"
                href="#regitro"
                onClick={() => ActivarVentana(2)}
              >
                Registro de Pacientes
              </a>
              <a
                className="letras-cuadro"
                href="#w"
                onClick={() => ActivarVentana(1)}
              >
                Agendar Citas
              </a>
              <a className="letras-cuadro" href="#w">
                Informe
              </a>
              <a className="letras-cuadro" href="#u">
                Registro de Pagos
              </a>
            </div>
          )}
          <button className="button-menu" onClick={toggleMenuCinco}>
            <i class="bx bx-clinic" style={{ marginRight: "10px" }}></i>
            Graficos <span style={{ float: "right" }}>▼</span>
          </button>
          {isOpenCinco && (
            <div className="menu-cuadro">
              <a
                className="letras-cuadro"
                href="https://app.powerbi.com/groups/me/reports/1395e79d-4bcd-4af4-92b7-4ed80ff499cf/c31127e33a083cb883c1?experience=power-bi"
              >
                Frecuencia Cardiaca
              </a>
            </div>
          )}
          <br></br>
          <br></br>
          <br></br>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={CerrarSesion}
          >
            CERRAR SESION
          </button>
        </nav>
      </aside>
      <div className="ordenar_cuadro">
        <div className="cuadro_azul"></div>
        <div className="container">
          {activateBox === 0 && <PacienteView />}
          {activateBox === 1 && <SuscripcionView />}
          {activateBox === 2 && <VistaMenuPaciente />}
        </div>
      </div>
    </div>
  );
};

export default HomePrincipal;
