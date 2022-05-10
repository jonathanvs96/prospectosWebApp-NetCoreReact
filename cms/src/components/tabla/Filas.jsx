import React from "react";

const Filas = ({ indice, prospecto, onClick }) => {
  const mostrarObservaciones = (estado) => {
    if (estado !== "Rechazado") {
      return;
    }
    return prospecto.observacion;
  };

  return (
    <tr>
      <td>{indice}</td>
      <td>{prospecto.name}</td>
      <td>{prospecto.fName}</td>
      <td>{prospecto.lName}</td>
      <td>{prospecto.status}</td>

      <td>{mostrarObservaciones(prospecto.status)}</td>
      <td>
        <div className="btn-group">
          <button
            className="btn btn-primary rounded-circle mr-2 prospecto-btn"
            data-bs-toggle="modal"
            data-bs-target="#prospectoModal"
            data={prospecto.id}
            onClick={onClick.bind(this, prospecto.id)}
          >
            <i className="fas fa-user-tie"></i>
          </button>

          <button className="btn btn-danger rounded-circle">
            <i className="nav-icon fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Filas;
