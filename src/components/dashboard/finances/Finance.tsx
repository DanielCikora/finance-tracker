"use client";
import Expenses from "./Expenses";
import useSalary from "@/hooks/useSalary";
import useExpense from "@/hooks/useExpense";
import Salary from "./Salary";
import {
  currencyOptions,
  timePeriodOptions,
  useCurrencySymbol,
} from "@/constants/constants";
import Balance from "./Balance";
import PieChart from "./PieChart";
import TotalExpenses from "./TotalExpenses";
import DashboardStocks from "./stocks/DashboardStocks";
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
  const currencySymbol = useCurrencySymbol(savedSalary.salaryCurrency);
  return (
    <section className='finance py-20 h-full'>
      <div className='wrapper flex justify-center h-full'>
        <div className='finance-stats grid gap-5 lg:grid-cols-3 grid-cols-1 w-full h-full'>
          <Balance
            remainingSalary={remainingSalary}
            currencySymbol={currencySymbol}
          />
          <Salary
            salary={salary}
            currencyOptions={currencyOptions}
            timePeriodOptions={timePeriodOptions}
            savedSalary={savedSalary}
            salaryError={salaryError}
            handleSaveSalaryAmount={handleSaveSalaryAmount}
            handleChangeSalaryAmount={handleChangeSalaryAmount}
            currencySymbol={currencySymbol}
          />
          <TotalExpenses
            totalExpensesAmount={totalExpensesAmount}
            currencySymbol={currencySymbol}
          />
          <div className='lg:col-span-2 col-span-1'>
            <PieChart
              salary={salary}
              savedSalary={savedSalary}
              remainingSalary={remainingSalary}
              totalExpensesAmount={totalExpensesAmount}
            />
          </div>
          <div className='col-span-1'>
            <DashboardStocks />
          </div>
          <div className='lg:col-span-3 col-span-1'>
            <Expenses
              allExpenses={allExpenses}
              expense={expense}
              handleChangeExpenses={handleChangeExpenses}
              handleSaveExpenses={handleSaveExpenses}
              handleRemoveExpense={handleRemoveExpense}
              expenseError={expenseError}
              currencySymbol={currencySymbol}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
