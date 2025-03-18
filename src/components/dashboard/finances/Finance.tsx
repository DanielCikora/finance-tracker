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
  const [expenses, setExpenses] = useState<ExpensesDataTypes>({
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

  const handleExpenses = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [name]: value,
    }));
  };

  const handleSaveExpenses = () => {
    setAllExpenses((prevAllExpenses) => [...prevAllExpenses, expenses]);
    setExpenses({
      expenseCost: "",
      expenseName: "",
    });
  };

  const allPrices = allExpenses.map((cost) => Number(cost.expenseCost));

  const totalExpensesAmount = allPrices.reduce(
    (accumulator, expenseCost) => accumulator + expenseCost,
    0
  );
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
          </div>
          <Expenses
            allExpenses={allExpenses}
            expenses={expenses}
            handleExpenses={handleExpenses}
            handleSaveExpenses={handleSaveExpenses}
            salaryCurrency={salary.salaryCurrency}
          />
        </div>
      </div>
    </div>
  );
}
