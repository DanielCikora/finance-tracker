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
    <div className='stock flex flex-col gap-1 border-2 border-solid border-navy p-2 rounded w-full max-w-[200px]'>
      <h2 className='font-semibold text-xl'>{ticker}</h2>
      <p className='font-medium text-2xl'>{stock?.currentPrice.toFixed(2)}</p>
      <p
        className={`text-lg font-semibold ${
          stock?.change >= 0 ? "text-green" : "text-red"
        }`}
      >
        {stock?.change.toFixed(2)} ({stock?.percentChange.toFixed(2)} %)
      </p>
    </div>
  );
}
