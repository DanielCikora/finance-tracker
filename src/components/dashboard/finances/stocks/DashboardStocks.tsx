"use client";
import Card from "@/components/ui/Card";
import Stock from "./Stock";
export default function DashboardStocks() {
  return (
    <Card cardTitle='Stocks'>
      <p className='stock__tag font-medium text-md absolute text-white top-5 right-6 bg-gray-900 py-1 px-2 rounded'>
        Live
      </p>
      <Stock ticker='AMD' />
      <Stock ticker='NVDA' />
      <Stock ticker='INTC' />
    </Card>
  );
}
