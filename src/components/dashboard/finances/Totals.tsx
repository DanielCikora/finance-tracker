import { TotalsPropsDataTypes } from "@/types/propsDataTypes";
import { Chart } from "react-google-charts";
import { chartOptions } from "@/constants/constants";
export default function Totals({
  savedSalary,
  salary,
  totalExpensesAmount,
  remainingSalary,
}: TotalsPropsDataTypes) {
  const chartData = [
    ["Salary", "Expenses"],
    ["Salary", savedSalary.salaryAmount === 0 ? 100 : savedSalary.salaryAmount],
    ["Expenses", totalExpensesAmount === 0 ? 0 : totalExpensesAmount],
  ];
  return (
    <Chart
      width={500}
      height={500}
      chartType='PieChart'
      data={chartData}
      options={chartOptions}
    />
  );
}
