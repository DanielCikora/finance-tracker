import { TotalsPropsDataTypes } from "@/types/propsDataTypes";
import { Chart } from "react-google-charts";
import { chartOptions } from "@/constants/constants";
export default function PieChart({
  savedSalary,
  totalExpensesAmount,
}: TotalsPropsDataTypes) {
  const chartData = [
    ["Salary", "Expenses"],
    ["Salary", Number(savedSalary.salaryAmount)],
    ["Expenses", Number(totalExpensesAmount)],
  ];
  console.log(chartData);
  return (
    <div className='relative bg-card lg:h-[400px] md:h-[300px] h-[200px] w-full rounded-lg'>
      {savedSalary.salaryAmount === 0 && totalExpensesAmount === 0 ? (
        <h2 className='text-center text-xl font-semibold'>No data.</h2>
      ) : (
        <Chart
          width='100%'
          height='100%'
          chartType='PieChart'
          data={chartData}
          options={chartOptions}
        />
      )}
    </div>
  );
}
