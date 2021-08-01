import { useState, useEffect } from "react";

// API 호출
function useFetch(url: RequestInfo): {
  loading: boolean;
  data: any[];
  error: any;
} {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<any>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { loading, data, error };
}

export default useFetch;
