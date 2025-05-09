"use client";
import { ExpenseCategory, ExpensesDataTypes } from "@/types/financesDataTypes";
import { useEffect, useState } from "react";
export default function useExpense() {
  const [expenseError, setExpenseError] = useState<string | null>(null);
  const [allExpenses, setAllExpenses] = useState<ExpensesDataTypes[] | null>(
    null
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedExpenses = localStorage.getItem("expenses");
      setAllExpenses(storedExpenses ? JSON.parse(storedExpenses) : []);
    }
  }, []);
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
    if (!expense.expenseName) {
      setExpenseError("Expense name is required!");
      return;
    }
    if (!expense.expenseCost) {
      setExpenseError("Expense cost is required!");
      return;
    }
    if (!expense.expenseCategory) {
      setExpenseError("Expense category is required!");
      return;
    }
    setAllExpenses((prevAllExpenses) => {
      const newAllExpenses = [...(prevAllExpenses || []), expense];
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
    setExpenseError(null);
  };
  const handleRemoveExpense = (removeExpenseId: number) => {
    setAllExpenses((prevAllExpenses) => {
      const newExpenses = (prevAllExpenses || []).filter(
        (expense) => expense.expenseId !== removeExpenseId
      );
      localStorage.setItem("expenses", JSON.stringify(newExpenses));
      return newExpenses;
    });
  };
  const allPrices: number[] = (allExpenses || []).map((cost) =>
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
    expenseError,
    handleChangeExpenses,
    handleSaveExpenses,
    handleRemoveExpense,
  };
}
