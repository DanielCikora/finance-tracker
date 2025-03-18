import axios from "axios";
import { useState, useEffect } from "react";
type FetchState<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};
export default function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<T>(url);
        const slicedStocks = response.data;
        setData(slicedStocks);
      } catch (error: any) {
        setError(
          error.response?.data?.message ||
            error.message ||
            "An unknown error occurred."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, error, loading };
}
