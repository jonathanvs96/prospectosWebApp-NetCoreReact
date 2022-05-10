import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        let res = await fetch(url);
        let data = await res.json();

        setData(data.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchResource();
  }, [url]);

  return { data, error };
};

export default useFetch;
