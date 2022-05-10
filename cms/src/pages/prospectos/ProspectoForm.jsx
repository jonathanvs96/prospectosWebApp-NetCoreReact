import React from "react";
import { Link } from "react-router-dom";

class ProspectoForm extends React.Component {
  render() {
    const { onChange, form, onSubmit } = this.props;

    return (
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        encType="multipart/form-data"
        // onChange={this.cambioForm}
      >
        <div className="form-row mb-3">
          <div className="col">
            <label htmlFor="Prospect_Name">Nombre: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Escriba su Nombre"
              name="Prospect_Name"
              id="Prospect_Name"
              onChange={onChange}
              value={form.Prospect_Name}
            />
          </div>
          <div className="col">
            <label htmlFor="Prospect_FName">Primer Apellido: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Escriba su Apellido"
              name="Prospect_FName"
              id="Prospect_FName"
              onChange={onChange}
              value={form.Prospect_FName}
            />
          </div>
          <div className="col">
            <label htmlFor="Prospect_LName">Segundo Apellido: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Este campo no es Obligatorio"
              id="Prospect_LName"
              name="Prospect_LName"
              onChange={onChange}
              value={form.Prospect_LName}
            />
          </div>
        </div>

        <div className="form-row mb-3">
          <div className="col">
            <label htmlFor="Prospect_Calle">Calle: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Escriba su Calle"
              name="Prospect_Calle"
              onChange={onChange}
              value={form.Prospect_Calle}
              id="Prospect_Calle"
            />
          </div>
          <div className="col">
            <label htmlFor="Prospect_NumDom">Numero de Casa: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Escriba Numero Dom"
              name="Prospect_NumDom"
              onChange={onChange}
              value={form.Prospect_NumDom}
              id="Prospect_NumDom"
            />
          </div>
          <div className="col">
            <label htmlFor="Prospect_Col">Colonia: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Escriba su Colonia"
              name="Prospect_Col"
              onChange={onChange}
              value={form.Prospect_Col}
              id="Prospect_Col"
            />
          </div>
        </div>

        <div className="form-row mb-3">
          <div className="col">
            <label htmlFor="Prospect_PostCode">Codigo Postal: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Codigo Postal"
              name="Prospect_PostCode"
              onChange={onChange}
              value={form.Prospect_PostCode}
              id="Prospect_PostCode"
            />
          </div>
          <div className="col">
            <label htmlFor="Prospect_Tel">Telefono: </label>

            <input
              type="text"
              className="form-control"
              placeholder="Numero de Telefono"
              name="Prospect_Tel"
              onChange={onChange}
              value={form.Prospect_Tel}
              id="Prospect_Tel"
            />
          </div>
          <div className="col">
            <label htmlFor="Prospect_RFC">RFC: </label>
            <input
              type="text"
              className="form-control"
              placeholder="RFC"
              name="Prospect_RFC"
              onChange={onChange}
              value={form.Prospect_RFC}
              id="Prospect_RFC"
            />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col">
            <input
              type="file"
              className="form-control"
              placeholder="documento"
              name="documento"
              id="Prospecto_Documento"
              onChange={onChange}
              value={form.documento}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "10rem" }}
        >
          Enviar
        </button>

        <Link to="/">
          <button className="ml-3 btn btn-danger" style={{ width: "10rem" }}>
            Salir
          </button>
        </Link>
      </form>
    );
  }
}

export default ProspectoForm;
