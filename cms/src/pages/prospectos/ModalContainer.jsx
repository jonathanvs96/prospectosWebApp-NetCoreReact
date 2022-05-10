import React from "react";
import { useState, useEffect } from "react";
import { rutaAPI } from "../../config/Config";

import ProspectoModal from "./presentation/ProspectoModal";
import Swal from "sweetalert2";

import $ from "jquery";

export default function Modalcontainer({ prospecto }) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [observaCount, setObservaCount] = useState(0);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        let res = await fetch(`${rutaAPI}/prospectos/${prospecto}`);
        let data = await res.json();

        setData(data.data[0]);
      } catch (error) {
        setError(error);
      }
    };
    fetchResource();
  }, [prospecto]);

  const handleSubmit = (e) => {
    Swal.fire({
      title: "¿Actualizar Prospecto?",
      text: "Estas Seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then(async (result) => {
      if (result.value) {
        let config = {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        let res = await fetch(`${rutaAPI}/prospecto/${data.id}`, config);

        let json = await res.json();
        console.log(json);

        if (json.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Actualizado con Exito",
            text: json.mensaje,
            showConfirmButton: true,
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#3085d6",
          }).then((result) => {
            if (result.value) {
              window.location.reload(false);
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
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    let estado = e.target.value;

    if (
      e.target.name == "Prospect_Status" &&
      estado == "Rechazado" &&
      observaCount < 1
    ) {
      setObservaCount(observaCount + 1);

      $("#observaciones").fadeIn();
    } else {
      if (e.target.name == "Prospect_Status" && estado == "Autorizado") {
        $("#observaciones").fadeOut();
        setObservaCount(0);
      }
    }
  };
  const handleOnClick = () => {
    $("#observaciones").fadeOut();
    setObservaCount(0);
  };

  return (
    <ProspectoModal
      onChange={handleChange}
      onSubmit={handleSubmit}
      onClick={handleOnClick}
      {...data}
    />
  );
}
