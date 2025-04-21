import { TotalsPropsDataTypes } from "@/types/propsDataTypes";
import { Chart } from "react-google-charts";
import { chartOptions } from "@/constants/constants";
export default function PieChart({
  savedSalary,
  totalExpensesAmount,
}: TotalsPropsDataTypes) {
  const chartData = [
    ["Salary & Expenses"],
    ["Salary", Number(savedSalary.salaryAmount)],
    ["Expenses", Number(totalExpensesAmount)],
  ];
  console.log(chartData);
  return (
    <>
      {savedSalary.salaryAmount === 0 && totalExpensesAmount === 0 ? (
        <h2 className='text-center text-xl font-semibold'>No data.</h2>
      ) : (
        <Chart
          width={500}
          height={500}
          chartType='PieChart'
          data={chartData}
          options={chartOptions}
        />
      )}
    </>
  );
}
