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
    <div className='totals w-full h-full flex flex-col items-center'>
      <h2 className='salary-amount text-lg'>
        Total Salary: {savedSalary.salaryAmount} {salary.salaryCurrency}{" "}
        {salary.salaryTimePeriod}
      </h2>
      <h2 className='expense-price text-lg'>
        Total Expenses: {totalExpensesAmount} {salary.salaryCurrency}
      </h2>
      <h2 className='salary-remaining text-lg'>
        Remaining Salary: {remainingSalary} {salary.salaryCurrency}{" "}
        {salary.salaryTimePeriod}
      </h2>
      <Chart
        width='100%'
        height={400}
        chartType='PieChart'
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
}
