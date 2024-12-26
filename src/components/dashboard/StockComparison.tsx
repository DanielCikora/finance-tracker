"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const StockComparison = () => {
  const [stockData, setStockData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const stockSymbols = ["NVDA", "AMD", "INTC"];
  const apiKey = process.env.NEXT_APP_API_KEY;
  const urls = stockSymbols.map(
    (symbol) =>
      `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${apiKey}`
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(urls.map((url) => axios.get(url)));
        const formattedData: any[] = [];
        const months: string[] = [];
        responses.forEach((response, index) => {
          const monthlyData = response.data["Monthly Time Series"];
          const symbol = stockSymbols[index];
          Object.entries(monthlyData).forEach(([date, data]: any, i) => {
            if (i < 12) {
              if (!formattedData[i]) {
                formattedData[i] = { month: date.substring(0, 7) };
              }
              formattedData[i][symbol] = parseFloat(data["4. close"]);
              if (months.length < 12) {
                months.push(date.substring(0, 7));
              }
            }
          });
        });
        setStockData(formattedData.reverse());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stock data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const exampleData = {
    "2024-11-30": { "1. open": "400", "4. close": "420" },
    "2024-10-31": { "1. open": "410", "4. close": "430" },
  };
  console.log("Example Data:", exampleData);
  const newGaga = Object.entries(exampleData);
  console.log("New Gaga:", newGaga);
  return (
    <div className='w-full h-[500px]'>
      {loading ? (
        <p>Loading stock data...</p>
      ) : (
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={stockData}>
            <CartesianGrid stroke='#E4E4E4' strokeDasharray='3 3' />
            <XAxis dataKey='month' stroke='#f5f5f5' />
            <YAxis stroke='#f5f5f5' />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='NVDA'
              stroke='#00B09C'
              strokeWidth={2}
              dot={false}
            />
            <Line
              type='monotone'
              dataKey='AMD'
              stroke='#FF5733'
              strokeWidth={2}
              dot={false}
            />
            <Line
              type='monotone'
              dataKey='INTC'
              stroke='#337BFF'
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default StockComparison;
