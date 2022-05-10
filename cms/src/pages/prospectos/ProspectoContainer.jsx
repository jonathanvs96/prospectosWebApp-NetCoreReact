import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Prospecto from "./presentation/Prospecto";
import { rutaAPI } from "../../config/Config";

export default function ProspectoContainer() {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);
  const [prospecto, setProspecto] = useState("");

  const { data, error } = useFetch(`${rutaAPI}/prospectos`);

  // useEffect(() => {
  //   const fetchProspectos = async () => {
  //     try {
  //       let res = await fetch(`${rutaAPI}/mostrar-prospecto`);
  //       let data = await res.json();

  //       if (data.status === 200) {
  //         setData(data.data);
  //       } else {
  //         setError(data);
  //       }
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };
  //   fetchProspectos();
  // }, []);

  const handleProspecto = (response) => {
    setProspecto(response);
  };

  return (
    <Prospecto data={data} onClick={handleProspecto} prospecto={prospecto} />
  );
}
