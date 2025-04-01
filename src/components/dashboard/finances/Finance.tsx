"use client";
import { currencyOptions, timePeriodOptions } from "@/constants/constants";
import Expenses from "./Expenses";
import Salary from "./Salary";
import Totals from "./Totals";
import useSalary from "@/hooks/useSalary";
import useExpense from "@/hooks/useExpense";
export default function Finance() {
  const {
    salary,
    savedSalary,
    handleChangeSalaryAmount,
    handleSaveSalaryAmount,
  } = useSalary();
  const {
    allExpenses,
    expense,
    totalExpensesAmount,
    expenseError,
    handleChangeExpenses,
    handleSaveExpenses,
    handleRemoveExpense,
  } = useExpense();
  const remainingSalary: number =
    Number(savedSalary?.salaryAmount) - totalExpensesAmount;
  return (
    <div className='wrapper'>
      <div className='finance-content py-4 md:flex-row flex-col gap-4 w-full justify-between'>
        <div className='flex flex-row gap-4 w-full'>
          <Salary
            salary={salary}
            currencyOptions={currencyOptions}
            timePeriodOptions={timePeriodOptions}
            savedSalary={savedSalary}
            handleSaveSalaryAmount={handleSaveSalaryAmount}
            handleChangeSalaryAmount={handleChangeSalaryAmount}
          />
          <Totals
            salary={salary}
            savedSalary={savedSalary}
            remainingSalary={remainingSalary}
            totalExpensesAmount={totalExpensesAmount}
          />
          <Expenses
            allExpenses={allExpenses}
            expense={expense}
            salaryCurrency={salary.salaryCurrency}
            handleChangeExpenses={handleChangeExpenses}
            handleSaveExpenses={handleSaveExpenses}
            handleRemoveExpense={handleRemoveExpense}
            expenseError={expenseError}
          />
        </div>
      </div>
    </div>
  );
}
