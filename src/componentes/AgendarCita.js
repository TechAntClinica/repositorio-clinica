import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../hojas estilos/AgendarCita.css";

const appointments = [
  { hora: "07:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "07:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "07:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "08:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "08:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "08:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "09:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "09:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "09:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "10:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "10:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "10:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "11:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "11:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "11:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "12:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "12:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "12:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "13:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "13:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "13:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "14:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "14:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "14:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "15:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "15:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "15:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "16:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "16:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "16:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "17:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "17:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "17:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "18:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "18:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "18:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "19:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  // Puedes agregar más citas aquí
];

const copiaAppointments = [
  { hora: "07:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "07:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "07:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "08:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "08:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "08:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "09:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "09:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "09:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "10:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "10:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "10:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "11:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "11:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "11:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "12:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "12:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "12:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "13:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "13:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "13:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "14:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "14:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "14:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "15:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "15:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "15:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "16:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "16:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "16:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "17:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "17:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "17:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "18:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "18:20", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "18:40", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  { hora: "19:00", Doctor: "-", CedulaPaciente: "-", status: "Disponible" },
  // Puedes agregar más citas aquí
];
const AppointmentScheduler = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [, /*patientName*/ setPatientName] = useState("");
  ///
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState(
    "Seleccione Doctor",
    "Jair Niebles",
    "Todos los Doctores"
  );

  const [documentType, setDocumentType] = useState("");
  const [selectDoctor, setSelectDoctor] = useState("");
  const [documentValue, setDocumentValue] = useState("");
  const [query, setQuery] = useState("");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estado para almacenar los datos filtrados
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Obtiene la fecha en formato YYYY-MM-DD
    setDate(today);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.post(
          "https://zvy9ac8zo1.execute-api.us-east-2.amazonaws.com/todasCitas"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [date]); // Dependencia de `date`
  console.log(date);
  console.log(data);
  console.log(error);
  console.log(loading);
  console.log(datosFiltrados);
  console.log(data.content);
  useEffect(() => {
    if (!data || !data.content) {
      console.error("data o data.content es undefined", data);
      return;
    }

    if (!date || isNaN(new Date(date).getTime())) {
      console.error("Invalid date value:", date);
      return;
    }

    const fechaFormateada = new Date(date).toISOString().split("T")[0];
    const filtrados = data.content.filter((item) => {
      const fechaItem = item.Fecha.split("T")[0];
      return fechaItem === fechaFormateada;
    });
    setDatosFiltrados(filtrados);
    console.log(appointments);
    console.log(copiaAppointments);

    if (datosFiltrados.length > 0) {
      appointments.forEach((appointment) => {
        // Buscamos en content si hay una coincidencia en la hora
        const match = datosFiltrados.find(
          (item) => item.Hora.slice(0, 5) === appointment.hora
        );

        // Si encontramos una coincidencia, reemplazamos el Doctor
        if (match) {
          appointment.Doctor = match.MedicoTratante;
          appointment.CedulaPaciente = match.Documento;
          appointment.status = "Ocupado"; // También podrías cambiar el estado si es necesario
        }
      });
    } else {
      appointments.forEach((appointment) => {
        appointment.Doctor = "-";
        appointment.CedulaPaciente = "-";
        appointment.status = "Disponible"; // También podrías cambiar el estado si es necesario
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, date]);

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
          Fecha: new Date(date).toISOString().split("T")[0],
        }
      ).then((response) => {
        console.log(response);
        if (response.data) {
          alert(`Cita agendada para ${date} a las ${selectedTime}`);
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
        <span className="titulo-fechas-disponibles">
          Citas Disponibles para la fecha: {date}
        </span>
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
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.hora}</td>
                <td>{appointment.Doctor}</td>
                <td>{appointment.CedulaPaciente}</td>
                <td>{appointment.status}</td>
                <td>
                  <button
                    className="add-btn"
                    style={{
                      backgroundColor:
                        appointment.status === "Disponible" ? "green" : "red",
                    }}
                    onClick={() => {
                      if (appointment.status === "Disponible") {
                        openModal(appointment.hora);
                      } else {
                        alert("No se puede agendar cita");
                      }
                    }}
                  >
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
                  value={selectDoctor}
                  onChange={(e) => setSelectDoctor(e.target.value)}
                  style={{ padding: "5px" }}
                >
                  <option value="">Seleccione Doctor...</option>
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
