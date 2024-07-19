import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  const httpConfig = (data, method) => {
    if (method === 'POST') {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      setMethod(method);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [url]);

  useEffect(() => {
    const httpsRequest = async () => {
      if (method === 'POST') {
        const res = await fetch(url, config);
        const json = await res.json();
        setCallFetch(json);
      }
    };

    if (config) {
      httpsRequest();
    }
  }, [config, method, url]);

  return { data, httpConfig };
};
