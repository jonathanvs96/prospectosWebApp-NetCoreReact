import React, { Fragment } from "react";
import Encabezado from "../../components/Encabezado";
import ProspectoForm from "./ProspectoForm";
import { rutaAPI } from "../../config/Config";
import $ from "jquery";
import Swal from "sweetalert2";

class ProspectoNew extends React.Component {
  state = {
    form: {
      name: "",
      fName: "",
      lName: "",
      calle: "",
      numeroDomicilio: "",
      colonia: "",
      codigoPostal: "",
      telefono: "",
      rfc: "",
    },
    documento: null,
    error: null,
  };

  handleChange = (e) => {
    if (e.target.type == "file") {
      let documento = $("#Prospecto_Documento").get(0).files[0];
      this.setState({ documento: documento });
    } else {
      this.setState({
        form: { ...this.state.form, [e.target.name]: e.target.value },
      });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Crear Nuevo Prospecto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then(async (result) => {
      if (result.value) {
        var formData = new FormData();
        formData.append("documento", this.state.documento);
        formData.append("Prospect_Name", this.state.form.Prospect_Name);
        formData.append("Prospect_FName", this.state.form.Prospect_FName);
        formData.append("Prospect_LName", this.state.form.Prospect_LName);
        formData.append("Prospect_Calle", this.state.form.Prospect_Calle);
        formData.append("Prospect_NumDom", this.state.form.Prospect_NumDom);
        formData.append("Prospect_Col", this.state.form.Prospect_Col);
        formData.append("Prospect_PostCode", this.state.form.Prospect_PostCode);
        formData.append("Prospect_Tel", this.state.form.Prospect_Tel);
        formData.append("Prospect_RFC", this.state.form.Prospect_RFC);

        let config = {
          method: "POST",
          body: formData,
        };
        let res = await fetch(`${rutaAPI}/crear-prospecto`, config);
        let json = await res.json();

        if (json.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Creado con Exito",
            text: json.mensaje,
            showConfirmButton: true,
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#3085d6",
          }).then((result) => {
            if (result.value) {
              this.props.history.push("/");
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: json.status,
            text: json.mensaje,
            showConfirmButton: true,
            confirmButtonText: "Cerrar",
            confirmButtonColor: "#d33",
          });
        }
      }
    });
  };

  render() {
    return (
      <Fragment>
        <Encabezado titulo="Nuevos Prospectos" />
        <div className="row">
          <div className="card card-primary card-outline">
            <div className="card-header"></div>
            <div className="card-body">
              <ProspectoForm
                onChange={this.handleChange}
                form={this.state.form}
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProspectoNew;
