"use client";
import Stock from "./Stock";
export default function DashboardStocks() {
  return (
    <div className='dashboard-stocks__content w-full flex flex-col justify-center gap-1'>
      <Stock ticker='AMD' />
      <Stock ticker='NVDA' />
      <Stock ticker='INTC' />
    </div>
  );
}
