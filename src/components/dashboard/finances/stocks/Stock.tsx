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
    <div className='stock text-white flex justify-between items-center md:gap-2 gap-1 border-b border-solid border-white w-full md:py-2 py-1'>
      <h2 className='font-semibold md:text-xl sm:text-lg text-md w-full'>
        {ticker}
      </h2>
      <p className='font-medium md:text-xl text-lg w-full'>
        {stock?.currentPrice.toFixed(2)}
      </p>
      <p
        className={`md:text-xl text-md font-semibold w-full text-nowrap ${
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
