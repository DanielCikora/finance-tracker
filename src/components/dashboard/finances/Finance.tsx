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
import Totals from "./Totals";
export default function Finance() {
  // Salary
  const [salary, setSalary] = useState<SalaryDataTypes>({
    salaryAmount: "",
    salaryCurrency: SalaryCurrencyType.USD,
  });

  const [savedSalary, setSavedSalary] = useState<SalaryDataTypes>({
    salaryAmount: 0,
    salaryCurrency: SalaryCurrencyType.USD,
  });
  // Expenses
  const [allExpenses, setAllExpenses] = useState<ExpensesDataTypes[]>([]);
  // Expenses Date
  const date: Date = new Date();
  date.toLocaleString();
  const formattedDate = new Intl.DateTimeFormat("en-gb", {
    dateStyle: "short",
    timeStyle: "short",
  });
  const format = formattedDate.format(date);
  // Expenses Initial
  const [expense, setExpense] = useState<ExpensesDataTypes>({
    expenseId: 0,
    expenseName: "",
    expenseCost: "",
    expenseDescription: "",
    expenseDate: format,
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
    localStorage.setItem("expenses", JSON.stringify(expense));
    setExpense((nextExpense) => ({
      expenseId: nextExpense.expenseId + 1,
      expenseCost: "",
      expenseName: "",
      expenseDescription: "",
      expenseDate: format,
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
      <div className='finance-content py-4 flex gap-4 w-full'>
        <Salary
          handleSaveSalaryAmount={handleSaveSalaryAmount}
          handleChangeSalaryAmount={handleChangeSalaryAmount}
          salary={salary}
          currencyOptions={currencyOptions}
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
