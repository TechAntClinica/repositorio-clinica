import React, { useState } from "react";
import Axios from "axios";
import "../hojas estilos/LoginSesion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoClinica from "../img/clinica.jpg";
//import Cookies from "universal-cookie";

function LoginAdministrador() {
  const [usernamelogin, setUsernameLogin] = useState("");
  const [passwordlogin, setPasswordLogin] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  //const operacion = "loginadm";
  //const cookies = new Cookies();

  const login = (e) => {
    if (usernamelogin === "" || passwordlogin === "") {
      alert("POR FAVOR INGRESE EL USUARIO O LA CONTRASEÑA");
    } else {
      e.preventDefault();
      Axios.post(
        "https://271y09ojq8.execute-api.us-east-2.amazonaws.com/desa",
        {
          //operacion: operacion,
          usernamelogin: usernamelogin,
          passwordlogin: passwordlogin,
        }
      ).then((response) => {
        console.log(response);
        if (response.data.message === "USUARIO FUE ENCONTRADO") {
          //cookies.set("Usuario", response.data.content.Usuario, { path: "/" });
          //cookies.set("Cargo", response.data.content.Contraseña, { path: "/" });
          alert(`Bienvenido: ${response.data.message}`);
          //setLoginStatus(response.data.message);

          window.location.href = "./principal";
        } else {
          setLoginStatus(response.data.message);
        }
      });
    }
  };

  return (
    <div className="container_general_colaborador">
      <div className="Cuadro_login">
        <div className="form-group">
          <img
            className="Logo_Colaborador"
            src={LogoClinica}
            alt="Imagen Logo Clinica"
          ></img>
          <h4 className="titulo_login_colaborador">
            <strong>HISTORIAS CLINICAS</strong>
          </h4>
          <input
            className="textInput_colaborador"
            type="text"
            name="username"
            onChange={(e) => {
              setUsernameLogin(e.target.value);
            }}
            placeholder="Ingrese el usuario"
            required
          />
          <br />
          <br />
          <input
            className="textInput_colaborador"
            type="password"
            name="password"
            onChange={(e) => {
              setPasswordLogin(e.target.value);
            }}
            placeholder="Ingrese la contraseña"
            required
          />
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
          <button
            className="btn btn-primary"
            type="submit"
            onClick={login}
            value="Login"
          >
            Ingresar
          </button>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default LoginAdministrador;
