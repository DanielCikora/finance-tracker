import { ExpensesDataTypes } from "@/types/financesDataTypes";
import { useState } from "react";
export default function useExpense() {
  const [allExpenses, setAllExpenses] = useState<ExpensesDataTypes[]>([]);
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
  });
  const handleChangeExpenses = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setExpense((prevExpenses) => ({
      ...prevExpenses,
      [name]: value,
    }));
  };
  const handleSaveExpenses = async () => {
    setAllExpenses((prevAllExpenses) => [...prevAllExpenses, expense]);
    setExpense((nextExpense) => ({
      expenseId: nextExpense.expenseId + 1,
      expenseCost: "",
      expenseName: "",
      expenseDescription: "",
      expenseDate: format,
    }));
  };
  const handleRemoveExpense = (removeExpenseId: number) => {
    setAllExpenses((prevAllExpenses) =>
      prevAllExpenses.filter((expense) => expense.expenseId !== removeExpenseId)
    );
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
    handleChangeExpenses,
    handleSaveExpenses,
    handleRemoveExpense,
    totalExpensesAmount,
  };
}
