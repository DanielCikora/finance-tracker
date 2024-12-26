"use client";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Bar,
  Tooltip,
} from "recharts";
interface StatisticsDataTypes {
  month: string;
  moneyRemaining: number;
}
const Statistics = () => {
  const data: StatisticsDataTypes[] = [
    { month: "Jan", moneyRemaining: 2000 },
    { month: "Feb", moneyRemaining: 1600 },
    { month: "Mar", moneyRemaining: 2200 },
    { month: "Apr", moneyRemaining: 800 },
    { month: "May", moneyRemaining: 600 },
    { month: "Jun", moneyRemaining: 1200 },
    { month: "Jul", moneyRemaining: 1400 },
    { month: "Aug", moneyRemaining: 300 },
    { month: "Sep", moneyRemaining: 200 },
    { month: "Oct", moneyRemaining: 800 },
    { month: "Nov", moneyRemaining: 1000 },
    { month: "Dec", moneyRemaining: 100 },
  ];
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className='p-2 border bg-white rounded shadow'>
          <p className='font-bold'>{`Month: ${payload[0].payload.month}`}</p>
          <p>{`Money Remaining: $${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className='w-full md:h-[500px] h-[300px] mb-10'>
      {data && data.length > 0 && (
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data}>
            <CartesianGrid stroke='#E4E4E4' strokeDasharray='3 3' />
            <XAxis dataKey='month' stroke='#f5f5f5' />
            <YAxis stroke='#f5f5f5' />
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{
                width: 250,
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                color: "black",
              }}
            />
            <Bar
              barSize={50}
              dataKey='moneyRemaining'
              fill='#00B09C'
              stroke='#00785C'
              strokeWidth={1}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
export default Statistics;
