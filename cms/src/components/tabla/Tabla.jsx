import React from "react";
import Filas from "./Filas";

const Tabla = ({ cabeceras, prospectos, onClick }) => (
  <table className="table table-striped" style={{ width: "100%" }}>
    <thead>
      <tr>
        {cabeceras.map((cabecera) => (
          <th>{cabecera}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {prospectos.map((prospecto, indice) => (
        <Filas
          key={prospecto.id}
          indice={indice + 1}
          prospecto={prospecto}
          onClick={onClick}
        />
      ))}
    </tbody>
  </table>
);

export default Tabla;
