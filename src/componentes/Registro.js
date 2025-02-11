import React, { useState } from "react";
import "../hojas estilos/Registro.css";
import Axios from "axios";

const RegistroPacientes = () => {
  const [tUsuario, setTUsuario] = useState("");
  const [tDocumento, setTDocumento] = useState("");
  const [cedula, setCedula] = useState("");
  const [primerApellido, setPrimerApellido] = useState("");
  const [segundoApellido, setSegundoApellido] = useState("");
  const [nombres, setNombres] = useState("");
  const [sexo, setSexo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0]);
  const [codigoEps, setCodigoEps] = useState("");
  const [codigoMp, setCodigoMp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ingreso al metodo");
    console.log(
      tUsuario,
      tDocumento,
      cedula,
      primerApellido,
      segundoApellido,
      nombres,
      sexo,
      direccion,
      departamento,
      ciudad,
      correo,
      telefono,
      fecha,
      codigoEps,
      codigoMp
    );
    if (
      tUsuario === "" ||
      tDocumento === "" ||
      cedula === "" ||
      primerApellido === "" ||
      segundoApellido === "" ||
      nombres === "" ||
      sexo === "" ||
      direccion === "" ||
      departamento === "" ||
      ciudad === "" ||
      correo === "" ||
      telefono === "" ||
      fecha === "" ||
      codigoEps === "" ||
      codigoMp === ""
    ) {
      alert("LOS CAMPOS NO HAN SIDO INGRESADOS");
    } else {
      Axios.post(
        "https://7d1pys0dve.execute-api.us-east-2.amazonaws.com/registro",
        {
          tUsuario: tUsuario,
          tDocumento: tDocumento,
          cedula: cedula,
          primerApellido: primerApellido,
          segundoApellido: segundoApellido,
          nombres: nombres,
          sexo: sexo,
          direccion: direccion,
          departamento: departamento,
          ciudad: ciudad,
          correo: correo,
          telefono: telefono,
          fecha: fecha,
          codigoEps: codigoEps,
          codigoMp: codigoMp,
        }
      ).then((response) => {
        console.log(response);
        if (response.data) {
          alert(
            `Usuario ${nombres} ${primerApellido} ${segundoApellido} fue registrado Correctamente`
          );
          window.location.reload();
        } else {
          alert("AL PARECER HAY UN PROBLEMA CON EL REGISTRO DEL USUARIO");
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="texto-ruta">PACIENTE / registro</h2>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <h2>Registro de pacientes</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {/* Columna izquierda */}
          <div style={{ flex: "1 1 45%" }}>
            <div>
              <label>*Tipo de Usuario</label>
              <select required onChange={(e) => setTUsuario(e.target.value)}>
                <option value="">Seleccione...</option>
                <option value="Afiliado Poliza de Salud">
                  Afiliado Poliza de Salud
                </option>
                <option value="Beneficiario">Beneficiario</option>
                <option value="Cotizante">Cotizante</option>
                <option value="Paciente Particular">Paciente Particular</option>
              </select>
            </div>
            <div>
              <label>*Tipo Documento</label>
              <select required onChange={(e) => setTDocumento(e.target.value)}>
                <option value="">Seleccione...</option>
                <option value="Cédula de Ciudadania">
                  Cédula de Ciudadania
                </option>
                <option value="Cédula de Extranjeria">
                  Cédula de Extranjeria
                </option>
                <option value="NIT">NIT</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="RETHUS">RETHUS</option>
                <option value="Tarjeta de Identidad">
                  Tarjeta de Identidad
                </option>
              </select>
            </div>
            <div>
              <label>*Documento</label>
              <input
                type="text"
                required
                onChange={(e) => setCedula(e.target.value)}
              />
            </div>
            <div>
              <label>*Primer Apellido</label>
              <input
                type="text"
                required
                onChange={(e) => setPrimerApellido(e.target.value)}
              />
            </div>
            <div>
              <label>*Segundo Apellido</label>
              <input
                type="text"
                onChange={(e) => setSegundoApellido(e.target.value)}
              />
            </div>
            <div>
              <label>*Nombres</label>
              <input
                type="text"
                required
                onChange={(e) => setNombres(e.target.value)}
              />
            </div>
            <div>
              <label>Sexo</label>
              <select onChange={(e) => setSexo(e.target.value)}>
                <option value="">Seleccione...</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>
          <div style={{ flex: "1 1 45%" }}>
            <div>
              <label>*Dirección</label>
              <input
                type="text"
                required
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <div>
              <label>*Departamento/Ciudad</label>
              <div style={{ display: "flex", gap: "10px" }}>
                <select
                  required
                  onChange={(e) => setDepartamento(e.target.value)}
                >
                  <option value="">Seleccione...</option>
                  <option value="Departamento uno">Departamento uno</option>
                </select>
                <select required onChange={(e) => setCiudad(e.target.value)}>
                  <option value="">Seleccione...</option>
                  <option value="Ciudad uno">Ciudad uno</option>
                </select>
              </div>
            </div>
            <div>
              <label>E-mail</label>
              <input type="email" onChange={(e) => setCorreo(e.target.value)} />
            </div>
            <div>
              <label>*Celular/Teléfono</label>
              <input
                type="tel"
                required
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div>
              <label>*Fecha Nacimiento</label>
              <input
                type="date"
                required
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
            <div>
              <label>*Código Eps</label>
              <select required onChange={(e) => setCodigoEps(e.target.value)}>
                <option value="">Seleccione...</option>
                <option value="CAPITAL SALUD -CM">CAPITAL SALUD -CM</option>
                <option value="COMFAMILIAR HUILA -CM">
                  COMFAMILIAR HUILA -CM
                </option>
                <option value="COMPENSAR EPS">COMPENSAR EPS</option>
                <option value="COOMEVA">COOMEVA</option>
                <option value="FAMISANAR">FAMISANAR</option>
                <option value="MEDIMAS">MEDIMAS</option>
                <option value="MEDIMAS -CM">MEDIMAS -CM</option>
                <option value="NUEVA EPS">NUEVA EPS</option>
                <option value="NUEVA EPS -CM">NUEVA EPS -CM</option>
                <option value="PARTICULAR">PARTICULAR</option>
                <option value="S.O.S">S.O.S</option>
                <option value="SALUD TOTAL">SALUD TOTAL</option>
                <option value="SANITAS">SANITAS</option>
                <option value="SURA">SURA</option>
              </select>
            </div>
            <div>
              <label>*Código Mp</label>
              <select onChange={(e) => setCodigoMp(e.target.value)}>
                <option value="">Seleccione...</option>
                <option value="COLMEDICA MEDICINA PREPAGADA">
                  COLMEDICA MEDICINA PREPAGADA
                </option>
                <option value="COLPATRIA MEDICINA PREPAGADA S.A.">
                  COLPATRIA MEDICINA PREPAGADA S.A.
                </option>
                <option value="COMPAÑIA DE MEDICINA PREPAGADA COLSANITAS S.A.">
                  COMPAÑIA DE MEDICINA PREPAGADA COLSANITAS S.A.
                </option>
                <option value="COOMEVA MEDICINA PREPAGADA S.A.">
                  COOMEVA MEDICINA PREPAGADA S.A.
                </option>
                <option value="EPS Y MEDICINA PREPAGADA SURAMERICANA S.A.">
                  EPS Y MEDICINA PREPAGADA SURAMERICANA S.A.
                </option>
                <option value="MEDICINA PREPAGADA COMFENALCO VALLE">
                  MEDICINA PREPAGADA COMFENALCO VALLE
                </option>
                <option value="MEDISANITAS S A COMPAÑIA DE MEDICINA PREPAGADA">
                  MEDISANITAS S A COMPAÑIA DE MEDICINA PREPAGADA
                </option>
                <option value="MEDPLUS MEDICINA PREPAGADA S.A.">
                  MEDPLUS MEDICINA PREPAGADA S.A.
                </option>
                <option value="NO APLICA">NO APLICA</option>
                <option value="VIVIR S.A">VIVIR S.A</option>
              </select>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <div className="filters">
            <button className="boton-agregar-cuadro">REGISTRAR</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegistroPacientes;
