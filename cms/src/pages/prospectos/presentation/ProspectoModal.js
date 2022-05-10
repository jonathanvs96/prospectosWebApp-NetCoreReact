import React from "react";

export default function ProspectoModal(props) {
  return (
    <div
      className="modal fade"
      id="prospectoModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="prospectoModalLabel">
              Prospecto
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="card card-primary card-outline">
                <div className="card-body">
                  <div className="form-row mb-3">
                    <div className="col">
                      <label>Nombre: </label>
                      <p>{props.name}</p>
                    </div>
                    <div className="col">
                      <label>Primer Apellido: </label>
                      <p>{props.fName}</p>
                    </div>
                    <div className="col">
                      <label>Segundo Apellido: </label>
                      <p>{props.lName}</p>
                    </div>
                  </div>
                  {/* <div className="form-row mb-3">
                    <div className="col">
                      <label>Domicilio: </label>
                      <p>{`${props.domicilio.calle} #${props.domicilio.numeroDomicilio}`}</p>
                    </div>
                    <div className="col">
                      <label>Colonia: </label>
                      <p>{props.domicilio.colonia}</p>
                    </div>
                    <div className="col">
                      <label>Codigo Postal: </label>
                      <p>{props.domicilio.codigoPostal}</p>
                    </div>
                  </div>
                  <div className="form-row mb-3">
                    <div className="col">
                      <label>Telefono: </label>
                      <p>{props.telefono}</p>
                    </div>
                    <div className="col">
                      <label>RFC: </label>
                      <p>{props.rfc}</p>
                    </div>
                  </div>
                  <div className="col mb-3">
                    <label>Estado:</label>

                    <select
                      className="col-6 form-select"
                      name="Prospect_Status"
                      onChange={props.onChange}
                    >
                      <option className="ocultar" selected disabled>
                        {props.status}
                      </option>
                      <option value="Autorizado">Autorizado</option>
                      <option value="Rechazado">Rechazado</option>
                    </select>
                  </div> */}

                  <div className="col ocultar" id="observaciones">
                    <label class="observaciones">Observaciones:</label>
                    <textarea
                      onChange={props.onChange}
                      name="Prospect_Observacion"
                      className="form-control observaciones"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={props.onClick}
            >
              Close
            </button>
            <button
              onClick={props.onSubmit}
              type="button"
              className="btn btn-primary"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
