import React from "react";
import Encabezado from "../../../components/Encabezado";
import Tabla from "../../../components/tabla/Tabla";
import { Link } from "react-router-dom";
import Modalcontainer from "../ModalContainer";

const Prospecto = ({ data, onClick, prospecto }) => {
  return (
    <React.Fragment>
      <Encabezado titulo="Prospectos" />
      <div className="row">
        <div className="card card-primary card-outline">
          <div className="card-header">
            <Link to="/prospecto/new">
              <button className="btn btn-primary">
                Agregar Nuevo Prospecto
              </button>
            </Link>
          </div>
          <div className="card-body">
            <Tabla
              cabeceras={[
                "#",
                "Nombre",
                "Primer Apellido",
                "Segundo Apellido",
                "Estado",
                "Observaciones",
                "Acciones",
              ]}
              prospectos={data}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
      <Modalcontainer prospecto={prospecto} />
    </React.Fragment>
  );
};

export default Prospecto;
