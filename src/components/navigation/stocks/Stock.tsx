"use client";
import Error from "@/components/Error/Error";
import Loader from "@/components/loader/Loader";
import useStock from "@/hooks/useStock";
export default function Stock({ ticker }: { ticker: string }) {
  const { stock, loading, error } = useStock(ticker);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error errorMessage={error} />;
  }
  if (!stock) return <p className='text-xl'>No data available.</p>;
  return (
    <div className='stock flex flex-col border border-solid border-navy p-1 rounded w-full'>
      <h2 className='font-semibold text-sm'>{ticker}</h2>
      <p className='font-medium text-sm'>{stock?.currentPrice.toFixed(2)}</p>
      <p
        className={`text-sm font-semibold ${
          stock?.change >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {stock?.change.toFixed(2)} ({stock?.percentChange.toFixed(2)} %)
      </p>
    </div>
  );
}
