import { useState, useEffect } from "react";

export function useProductWithQuery(query) {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/items?q=${query}`
        );
        const data = await response.json();
        setData(data.body);
        setLoaded(true);
      } catch (error) {
        setLoaded(true);
        setError(true);
      }
    }
    getData();
  }, [query]);

  return [data, loaded, error];
}

export function useProductId(id) {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/items/${id}`
        );
        const data = await response.json();
        setData(data.body);
        setLoaded(true);
      } catch (error) {
        setLoaded(true);
        setError(true);
      }
    }
    getData();
  }, [id]);

  return [data, loaded, error];
}
