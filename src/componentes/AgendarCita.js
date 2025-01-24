import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../hojas estilos/AgendarCita.css";

const appointments = [
  "07:00",
  "07:20",
  "07:40",
  "08:00",
  "08:20",
  "08:40",
  "09:00",
  "09:20",
  "09:40",
  "10:00",
  "10:20",
  "10:40",
  "11:00",
  "11:20",
  "11:40",
  "12:00",
  "12:20",
  "12:40",
  "13:00",
  "13:20",
  "13:40",
  "14:00",
  "14:20",
  "14:20",
  "15:00",
  "15:20",
  "15:40",
  "16:00",
  "16:20",
  "16:40",
  "17:00",
  "17:20",
  "17:40",
  "18:00",
  "18:20",
  "18:40",
  "19:00",
];

const AppointmentScheduler = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [patientName, setPatientName] = useState("");
  ///
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState(
    "Seleccione Doctor",
    "Jair Niebles",
    "Todos los Doctores"
  );

  const [documentType, setDocumentType] = useState("");
  const [selectDoctor, setselectDoctor] = useState("");
  const [documentValue, setDocumentValue] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Obtiene la fecha en formato YYYY-MM-DD
    setDate(today);
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  /////

  const openModal = (time) => {
    setSelectedTime(time);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setPatientName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(documentType, documentValue, selectDoctor, date, selectedTime);
    if (
      documentType === "" ||
      documentValue === "" ||
      selectDoctor === "" ||
      date === "" ||
      selectedTime === ""
    ) {
      alert("LOS CAMPOS NO HAN SIDO INGRESADOS");
    } else {
      Axios.post(
        "https://1d6hu6tku3.execute-api.us-east-2.amazonaws.com/agendar",
        {
          Tipo: documentType,
          Documento: documentValue,
          MedicoTratante: selectDoctor,
          Hora: selectedTime,
          Fecha: date,
        }
      ).then((response) => {
        console.log(response);
        if (response.data) {
          alert(`Cita agendada para ${patientName} a las ${selectedTime}`);
          closeModal();
        } else {
          alert("AL PARECER HAY UN PROBLEMA CON EL REGISTRO DE LA CITA");
        }
      });
    }
  };

  return (
    <div className="container-agendar">
      <h2 className="texto-ruta">cita /</h2>
      <p>
        Seleccione a continuación la fecha, doctor o paciente según requiera
        realizar la búsqueda
      </p>

      <div className="filters">
        <input
          className="cuadro-fecha-agenda"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          className="selector-doctor"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        >
          <option value="">Seleccione Doctor...</option>
          <option value="Jair Niebles">Jair Niebles</option>
          <option value="Otro Doctor">Otro Doctor</option>
        </select>

        <div class="dropdown">
          <select>
            <option>Cédula de Ciudadanía</option>
            <option>Cédula de Extranjería</option>
            <option>NIT</option>
            <option>Pasaporte</option>
            <option>RETHUS</option>
            <option>Tarjeta de Identidad</option>
          </select>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Buscar..."
            style={{ padding: "8px", width: "200px" }}
          />
          <button
            className="search-btn"
            onClick={handleSearch}
            style={{ cursor: "pointer", padding: "8px" }}
          >
            🔍
          </button>
        </div>
      </div>

      <div className="appointment-table">
        <h3>AGENDA DE CITAS</h3>
        <table>
          <thead>
            <tr>
              <th>Fecha/Hora</th>
              <th>Doctor</th>
              <th>Paciente</th>
              <th>Estado</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((time, index) => (
              <tr key={index}>
                <td>{time}</td>
                <td>-</td>
                <td>-</td>
                <td>Disponible</td>
                <td>
                  <button className="add-btn" onClick={() => openModal(time)}>
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>Agendar Cita para {selectedTime}</h3>
            <form onSubmit={handleSubmit}>
              <label>* Fecha Cita</label>
              <div className="filters">
                <input
                  className="input-fecha"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <label>* Paciente</label>
              <div className="cedula-cuadro">
                <select
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                  style={{ padding: "5px" }}
                >
                  <option value="">Seleccione Documento...</option>
                  <option value="CC">CC</option>
                  <option value="CE">CE</option>
                  <option value="NI">NI</option>
                  <option value="PA">PA</option>
                  <option value="RT">RT</option>
                  <option value="TI">TI</option>
                </select>
                <input
                  type="text"
                  value={documentValue}
                  onChange={(e) => setDocumentValue(e.target.value)}
                  placeholder="Ingrese el número"
                  style={{ padding: "4px" }}
                />
              </div>
              <br></br>
              <label>* Médico Tratante</label>
              <div className="cedula-cuadro">
                <select
                  className="select-cuadro"
                  value={documentType}
                  onChange={(e) => setselectDoctor(e.target.value)}
                  style={{ padding: "5px" }}
                >
                  <option value="Seleccione Doctor">Seleccione Doctor</option>
                  <option value="Jair Niebles">Jair Niebles</option>
                </select>
              </div>
              <br></br>
              <div className="filters">
                <button className="boton-agregar-cuadro">Agendar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentScheduler;
