import { TotalsPropsDataTypes } from "@/types/propsDataTypes";
export default function Totals({
  savedSalary,
  salary,
  totalExpensesAmount,
  remainingSalary,
}: TotalsPropsDataTypes) {
  return (
    <div className='totals w-full flex flex-col items-center'>
      <h2 className='salary-amount text-lg'>
        Total Salary: {savedSalary.salaryAmount} {salary.salaryCurrency}
      </h2>
      <h2 className='expense-price text-lg'>
        Total Expenses: {totalExpensesAmount} {salary.salaryCurrency}
      </h2>
      <h2 className='salary-remaining text-lg'>
        Remaining Salary: {remainingSalary} {salary.salaryCurrency}
      </h2>
    </div>
  );
}
