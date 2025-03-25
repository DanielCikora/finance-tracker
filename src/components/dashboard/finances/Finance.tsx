"use client";
import { useState } from "react";
import { currencyOptions, timePeriodOptions } from "@/constants/constants";
import { ExpensesDataTypes } from "@/types/financesDataTypes";
import Expenses from "./Expenses";
import Salary from "./Salary";
import Totals from "./Totals";
import useSalary from "@/hooks/useSalary";
import useExpense from "@/hooks/useExpense";
export default function Finance() {
  // Salary Custom Hook
  const {
    salary,
    savedSalary,
    handleChangeSalaryAmount,
    handleSaveSalaryAmount,
  } = useSalary();
  // Expense Custom Hook
  const {
    allExpenses,
    expense,
    handleChangeExpenses,
    handleSaveExpenses,
    handleRemoveExpense,
    totalExpensesAmount,
  } = useExpense();
  // Total
  const remainingSalary: number =
    Number(savedSalary.salaryAmount) - totalExpensesAmount;
  return (
    <div className='wrapper'>
      <div className='finance-content py-4 flex gap-4 w-full'>
        <Salary
          handleSaveSalaryAmount={handleSaveSalaryAmount}
          handleChangeSalaryAmount={handleChangeSalaryAmount}
          salary={salary}
          currencyOptions={currencyOptions}
          timePeriodOptions={timePeriodOptions}
          savedSalary={savedSalary}
        />
        <Totals
          savedSalary={savedSalary}
          salary={salary}
          totalExpensesAmount={totalExpensesAmount}
          remainingSalary={remainingSalary}
        />
        <Expenses
          allExpenses={allExpenses}
          expense={expense}
          handleChangeExpenses={handleChangeExpenses}
          handleSaveExpenses={handleSaveExpenses}
          salaryCurrency={salary.salaryCurrency}
          handleRemoveExpense={handleRemoveExpense}
        />
      </div>
    </div>
  );
}
