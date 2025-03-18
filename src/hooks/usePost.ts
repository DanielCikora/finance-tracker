import { useState } from "react";
import axios from "axios";
import { PostDataTypes } from "@/types/axiosDataTypes";
export default function usePost<T>(postUrl: string): PostDataTypes<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const postData = async (body: object) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post<T>(postUrl, body, {
        headers: { "Content-Type": "application/json" },
      });
      setData(response.data);
    } catch (error: any) {
      setError(
        error.response?.data?.message || error.message || "An error occurred."
      );
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, postData };
}
