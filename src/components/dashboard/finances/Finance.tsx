"use client";
import { useState } from "react";
import Expenses from "./Expenses";
import Salary from "./Salary";
import { currencyOptions } from "@/constants/constants";
import {
  ExpensesDataTypes,
  SalaryCurrencyType,
  SalaryDataTypes,
} from "@/types/financesDataTypes";
export default function Finance() {
  const [salary, setSalary] = useState<SalaryDataTypes>({
    salaryAmount: "",
    salaryCurrency: SalaryCurrencyType.USD,
  });

  const [savedSalary, setSavedSalary] = useState<SalaryDataTypes>({
    salaryAmount: 0,
    salaryCurrency: SalaryCurrencyType.USD,
  });

  const [allExpenses, setAllExpenses] = useState<ExpensesDataTypes[]>([]);
  const [expense, setExpense] = useState<ExpensesDataTypes>({
    expenseId: 0,
    expenseName: "",
    expenseCost: "",
  });

  // Salary

  const handleChangeSalaryAmount = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setSalary((prevSalary) => ({
      ...prevSalary,
      [name]: name === "salaryAmount" ? Number(value) : value,
    }));
  };

  const handleSaveSalaryAmount = () => {
    setSavedSalary(salary);
  };

  // Expenses

  const handleChangeExpenses = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setExpense((prevExpenses) => ({
      ...prevExpenses,
      [name]: value,
    }));
  };

  const handleSaveExpenses = () => {
    setAllExpenses((prevAllExpenses) => [...prevAllExpenses, expense]);
    setExpense((nextExpense) => ({
      expenseId: nextExpense.expenseId + 1,
      expenseCost: "",
      expenseName: "",
    }));
  };

  const allPrices: number[] = allExpenses.map((cost) =>
    Number(cost.expenseCost)
  );

  const totalExpensesAmount: number = allPrices.reduce(
    (accumulator, expenseCost) => accumulator + expenseCost,
    0
  );

  const handleRemoveExpense = (removeExpenseId: number) => {
    setAllExpenses((prevAllExpenses) =>
      prevAllExpenses.filter((expense) => expense.expenseId !== removeExpenseId)
    );
  };

  // Total remaining salary
  const remainingSalary: number =
    Number(savedSalary.salaryAmount) - totalExpensesAmount;

  return (
    <div className='wrapper'>
      <div className='finance-content'>
        <div className='flex justify-between gap-2 w-full'>
          <Salary
            handleSaveSalaryAmount={handleSaveSalaryAmount}
            handleChangeSalaryAmount={handleChangeSalaryAmount}
            salary={salary}
            currencyOptions={currencyOptions}
            savedSalary={savedSalary}
          />
          <div className='w-full'>
            <h2 className='expense-price text-lg'>
              Total Salary: {savedSalary.salaryAmount} {salary.salaryCurrency}
            </h2>
            <h2 className='expense-price text-lg'>
              Total Expenses: {totalExpensesAmount} {salary.salaryCurrency}
            </h2>
            <h1>
              Remaining Salary: {remainingSalary} {salary.salaryCurrency}
            </h1>
          </div>
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
    </div>
  );
}
