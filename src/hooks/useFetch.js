import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const refresh = (url) => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally((loading) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    refresh(url);
  }, [url]);

  return { loading, data, error, refresh };
}
