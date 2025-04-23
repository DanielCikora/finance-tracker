import { useState, useEffect } from "react";
import axios from "axios";
import { StocksDataTypes, FinnHubDataTypes } from "@/types/stocksDataTypes";

export default function useStock(ticker: string) {
  const [stock, setStock] = useState<StocksDataTypes | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    let isMounted: boolean = true;
    const fetchStock = async () => {
      try {
        const response = await axios.get<FinnHubDataTypes>("/api/quote", {
          params: { symbol: ticker },
        });
        if (!isMounted) return;
        const { c: currentPrice, d: change, dp: percentChange } = response.data;
        setStock({ currentPrice, change, percentChange });
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStock();
    const interval = setInterval(fetchStock, 10000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [ticker]);
  return { stock, error, loading };
}
