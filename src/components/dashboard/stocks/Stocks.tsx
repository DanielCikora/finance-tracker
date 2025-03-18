"use client";
import Stock from "./Stock";
export default function DashboardStocks() {
  return (
    <div className='wrapper'>
      <div className='dashboard-stocks__content w-full flex justify-center gap-4'>
        <Stock ticker='NVDA' />
        <Stock ticker='AAPL' />
        <Stock ticker='TSLA' />
      </div>
    </div>
  );
}
