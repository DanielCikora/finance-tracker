"use client";
import Expenses from "./Expenses";
import Totals from "./PieChart";
import useSalary from "@/hooks/useSalary";
import useExpense from "@/hooks/useExpense";
import Salary from "./Salary";
import { currencyOptions, timePeriodOptions } from "@/constants/constants";
export default function Finance() {
  const {
    allExpenses,
    expense,
    totalExpensesAmount,
    expenseError,
    handleChangeExpenses,
    handleSaveExpenses,
    handleRemoveExpense,
  } = useExpense();
  const {
    salary,
    savedSalary,
    salaryError,
    handleChangeSalaryAmount,
    handleSaveSalaryAmount,
  } = useSalary();
  const remainingSalary: number =
    Number(savedSalary?.salaryAmount) - totalExpensesAmount;
  return (
    <section className='dashboard-stocks'>
      <div className='wrapper'>
        <div className='finance-content py-4 md:flex-row flex-col gap-4 w-full justify-between'>
          <div className='flex flex-col items-center gap-4 w-full justify-center'>
            {/* Balance */}
            <Salary
              salary={salary}
              currencyOptions={currencyOptions}
              timePeriodOptions={timePeriodOptions}
              savedSalary={savedSalary}
              salaryError={salaryError}
              handleSaveSalaryAmount={handleSaveSalaryAmount}
              handleChangeSalaryAmount={handleChangeSalaryAmount}
            />
            {/* Salary */}
            <Expenses
              allExpenses={allExpenses}
              expense={expense}
              salaryCurrency={salary.salaryCurrency}
              handleChangeExpenses={handleChangeExpenses}
              handleSaveExpenses={handleSaveExpenses}
              handleRemoveExpense={handleRemoveExpense}
              expenseError={expenseError}
            />
            {/* Expenses */}
            <Totals
              salary={salary}
              savedSalary={savedSalary}
              remainingSalary={remainingSalary}
              totalExpensesAmount={totalExpensesAmount}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
