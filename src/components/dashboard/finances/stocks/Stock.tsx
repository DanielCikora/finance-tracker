"use client";
import Error from "@/components/Error/Error";
import Loader from "@/components/loader/Loader";
import useStock from "@/hooks/useStock";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className='stock text-white flex justify-between gap-5 border-b border-solid border-white w-full py-2'>
      <h2 className='font-semibold text-2xl w-[80px] '>{ticker}</h2>
      <p className='font-medium text-2xl'>{stock?.currentPrice.toFixed(2)}</p>
      <p
        className={`text-2xl font-semibold ${
          stock?.change >= 0 ? "text-income" : "text-expense"
        }`}
      >
        {stock?.change >= 0 ? (
          <FontAwesomeIcon className='block text-income' icon={faCaretUp} />
        ) : (
          <FontAwesomeIcon className='block text-expense' icon={faCaretDown} />
        )}{" "}
        {stock?.change.toFixed(2)} ({stock?.percentChange.toFixed(2)} %)
      </p>
    </div>
  );
}
