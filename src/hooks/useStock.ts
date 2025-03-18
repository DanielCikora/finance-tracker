import { useState, useEffect } from "react";
import axios from "axios";
import { StocksDataTypes } from "@/types/stocksDataTypes";

const BASE_URL = "https://finnhub.io/api/v1/quote";
const API_KEY = process.env.NEXT_PUBLIC_APP_STOCKS_API_KEY;

export default function useStock(ticker: string) {
  const [stock, setStock] = useState<StocksDataTypes | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    let isMounted = true;
    const fetchStock = async () => {
      try {
        const response = await axios.get<{ c: number; d: number; dp: number }>(
          `${BASE_URL}`,
          {
            params: { symbol: ticker, token: API_KEY },
          }
        );
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
