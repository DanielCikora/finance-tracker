"use client";
import { ExpenseCategory, ExpensesDataTypes } from "@/types/financesDataTypes";
import { useState } from "react";
export default function useExpense() {
  const [allExpenses, setAllExpenses] = useState<ExpensesDataTypes[]>(() => {
    const savedAllExpenses = localStorage.getItem("expenses");
    return savedAllExpenses ? JSON.parse(savedAllExpenses) : [];
  });
  const date: Date = new Date();
  date.toLocaleString();
  const formattedDate = new Intl.DateTimeFormat("en-gb", {
    dateStyle: "short",
    timeStyle: "short",
  });
  const format = formattedDate.format(date);
  const [expense, setExpense] = useState<ExpensesDataTypes>({
    expenseId: 0,
    expenseName: "",
    expenseCost: "",
    expenseDescription: "",
    expenseDate: format,
    expenseCategory: ExpenseCategory.MISCELLANEOUS,
  });
  const handleChangeExpenses = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setExpense((prevExpenses) => ({
      ...prevExpenses,
      [name]: value,
    }));
  };
  const handleSaveExpenses = () => {
    setAllExpenses((prevAllExpenses) => {
      const newAllExpenses = [...prevAllExpenses, expense];
      localStorage.setItem("expenses", JSON.stringify(newAllExpenses));
      return newAllExpenses;
    });
    setExpense((nextExpense) => ({
      expenseId: nextExpense.expenseId + 1,
      expenseCost: "",
      expenseName: "",
      expenseDescription: "",
      expenseDate: format,
      expenseCategory: ExpenseCategory.MISCELLANEOUS,
    }));
  };
  const handleRemoveExpense = (removeExpenseId: number) => {
    setAllExpenses((prevAllExpenses) => {
      const newExpenses = prevAllExpenses.filter(
        (expense) => expense.expenseId !== removeExpenseId
      );
      localStorage.setItem("expenses", JSON.stringify(newExpenses));
      return newExpenses;
    });
  };
  const allPrices: number[] = allExpenses.map((cost) =>
    Number(cost.expenseCost)
  );
  const totalExpensesAmount: number = allPrices.reduce(
    (accumulator, expenseCost) => accumulator + expenseCost,
    0
  );
  return {
    allExpenses,
    expense,
    totalExpensesAmount,
    handleChangeExpenses,
    handleSaveExpenses,
    handleRemoveExpense,
  };
}
