import { useEffect, useState } from 'react';

export default function useSimpleFetch({ service, limit }) {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [issue, setIssue] = useState(7);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [cantidad,setCantidad] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const result = await service({ limit, offset,issue });
      console.log(result);
      setData(result.rows);
      setCantidad(result.total[0].total)
    } catch (e) {
      setError(e.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [offset,issue]);

  return { data, loading, error, setOffset, offset ,cantidad ,setIssue};
}
