import React, { useState } from "react";
import "../hojas estilos/MirarUsuario.css";
import Axios from "axios";

const PatientInfo = () => {
  const [tUsuario, setTUsuario] = useState("");
  const [tDocumento, setTDocumento] = useState("");
  const [cedula, setCedula] = useState("");
  const [primerApellido, setPrimerApellido] = useState("");
  const [segundoApellido, setSegundoApellido] = useState("");
  const [nombres, setNombres] = useState("");
  const [sexo, setSexo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [codigoEps, setCodigoEps] = useState("");
  const [codigoMp, setCodigoMp] = useState("");
  const [buscarDocumento, setBuscarDocumento] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [activateBox, setActivateBox] = useState(0);

  const handleInputChange = (event) => {
    setBuscarDocumento(event.target.value);
  };

  const handleSearch = () => {
    if (buscarDocumento.trim() !== "") {
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const buscarPaciente = (e) => {
    setLoginStatus("");
    if (buscarDocumento === "") {
      alert("POR FAVOR INGRESE EL DOCUMENTO A BUSCAR");
    } else {
      e.preventDefault();
      Axios.post(
        "https://fyncv32a9l.execute-api.us-east-2.amazonaws.com/buscar",
        {
          buscar: buscarDocumento,
        }
      ).then((response) => {
        console.log(response);
        if (response.data.message === "PACIENTE FUE ENCONTRADO CON EXITO") {
          ActivarVentana(0);
          setTUsuario(response.data.userEncontrado.TipoUsuario);
          setTDocumento(response.data.userEncontrado.TipoDocumento);
          setCedula(response.data.userEncontrado.Documento);
          setPrimerApellido(response.data.userEncontrado.PrimerApellido);
          setSegundoApellido(response.data.userEncontrado.SegundoApellido);
          setNombres(response.data.userEncontrado.Nombres);
          setSexo(response.data.userEncontrado.Sexo);
          setDireccion(response.data.userEncontrado.Direccion);
          setCorreo(response.data.userEncontrado.Correo);
          setTelefono(response.data.userEncontrado.Telefono);
          setFecha(response.data.userEncontrado.FechaNacimiento);
          setCodigoEps(response.data.userEncontrado.CodigoEps);
          setCodigoMp(response.data.userEncontrado.CodigoMp);
        } else {
          ActivarVentana(1);
          setLoginStatus(response.data.message);
        }
      });
    }
  };

  const ActivarVentana = (numero) => {
    setActivateBox(numero);
  };

  return (
    <div className="container-mirar-paciente">
      <div className="menu">
        <div>
          <input
            type="text"
            value={buscarDocumento}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Consulta de Paciente >>> Ingrese el numero de Documento"
            style={{ padding: "8px", width: "700px" }}
          />
          <button
            className="search-btn"
            onClick={(handleSearch, buscarPaciente)}
            style={{ cursor: "pointer", padding: "8px" }}
          >
            🔍
          </button>
        </div>
      </div>
      <div className="content">
        {activateBox === 1 && (
          <h1
            style={{
              color: "red",
              fontSize: "15px",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            {loginStatus}
          </h1>
        )}
        {activateBox === 0 && (
          <>
            <div className="info-section">
              <h3>
                <i className="bx bxs-user"></i> {primerApellido}{" "}
                {segundoApellido} {nombres}
              </h3>
              <div className="info-item">
                <label>TIPO DOCUMENTO</label>
                <p>{tDocumento}</p>
              </div>
              <div className="info-item">
                <label>DOCUMENTO</label>
                <p>{cedula}</p>
              </div>
              <div className="info-item">
                <label>FECHA NACIMIENTO</label>
                <p>{fecha}</p>
              </div>
              <div className="info-item">
                <label>GÉNERO</label>
                <p>{sexo}</p>
              </div>
              <div className="info-item">
                <label>TIPO USUARIO</label>
                <p>{tUsuario}</p>
              </div>
            </div>
            <div className="contact-section">
              <h3>DATOS DE CONTACTO</h3>
              <div className="info-item">
                <i className="bx bx-mobile"></i>
                <p>{telefono}</p>
              </div>
              <div className="info-item">
                <i className="bx bx-current-location"></i>
                <p>{direccion}</p>
              </div>
              <div className="info-item">
                <i className="bx bxs-envelope"></i>
                <p>{correo}</p>
              </div>
              <div className="info-item">
                <i className="bx bxs-building-house"></i>
                <p>{codigoEps}</p>
              </div>
              <div className="info-item">
                <i className="bx bxs-ambulance"></i>
                <p>{codigoMp}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PatientInfo;
