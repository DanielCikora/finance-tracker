"use client";
import MainTitle from "../ui/MainTitle";
import FormButton from "../ui/FormButton";
import { useDispatch } from "react-redux";
import { initializeExpenses } from "../utils/slices/expensesSlice";
import { useState } from "react";
import { ExpensesDataTypes } from "../utils/constants/dataTypes";
const Dashboard = () => {
  const dispatch = useDispatch();
  const [expenses, setExpenses] = useState<ExpensesDataTypes[]>([]);
  const [expenseName, setExpenseName] = useState<string>("");
  const [expenseAmount, setExpenseAmount] = useState<string | number>(0);
  const [expenseCurrency, setExpenseCurrency] = useState<string>("$");
  const [expenseId, setExpenseId] = useState<number>(1);
  const [showExpensesModal, setShowExpensesModal] = useState<boolean>(false);
  const handleShowExpensesModal = () => {
    setShowExpensesModal(showExpensesModal ? false : true);
  };
  const expenseCurrencyOptions = [
    { id: 0, value: "USD", symbol: "$" },
    { id: 1, value: "EUR", symbol: "€" },
    { id: 2, value: "INR", symbol: "₹" },
    { id: 3, value: "GBP", symbol: "£" },
    { id: 4, value: "CAD", symbol: "$" },
    { id: 5, value: "AUD", symbol: "$" },
    { id: 6, value: "JPY", symbol: "¥" },
    { id: 7, value: "RUB", symbol: "₽" },
  ];
  const handleAddExpense = (event: React.FormEvent) => {
    event.preventDefault();
    const parsedExpenseAmount =
      typeof expenseAmount === "string"
        ? parseFloat(expenseAmount)
        : expenseAmount;
    const date: Date = new Date();
    const formattedDate: string = date.toLocaleString();
    const newExpense: ExpensesDataTypes = {
      expenseName,
      expenseAmount: parsedExpenseAmount,
      expenseId,
      expenseCurrency,
      date: formattedDate,
    };
    console.log(newExpense);
    setExpenses([...expenses, newExpense]);
    setExpenseId(expenseId + 1);
    setExpenseName("");
    setExpenseAmount(0);
  };
  const handleRemoveExpense = (id: number) => {
    setExpenses((prevExpense) =>
      prevExpense.filter((expense) => expense.expenseId !== id)
    );
  };
  return (
    <section className='dashboard'>
      <div className='wrapper'>
        <MainTitle titleText='Dashboard' className='py-2' />
        <div className='dashboard-content'>
          <button onClick={handleShowExpensesModal}>
            {showExpensesModal ? "Close" : "Add Expenses"}
          </button>
          <div className='flex flex-col justify-center items-center min-h-[300px] p-2 max-w-[300px] w-full h-full bg-offBlack text-offWhite rounded'>
            <h3 className='text-2xl'>Total expenses: </h3>
            <h4 className='text-4xl'>
              {expenses.reduce((total, expense) => {
                const amount =
                  typeof expense.expenseAmount === "string"
                    ? parseFloat(expense.expenseAmount)
                    : expense.expenseAmount;
                return total + amount;
              }, 0)}{" "}
              {expenseCurrency}
            </h4>
          </div>
          {showExpensesModal && (
            <div className='expenses-modal bg-offBlack min-h-[400px] p-2 rounded'>
              <form onSubmit={handleAddExpense}>
                <div className='flex gap-4'>
                  <input
                    type='text'
                    required
                    placeholder='Expense name'
                    className='block no-spinner py-2 w-full bg-inherit px-2 text-md font-semibold border border-solid border-offWhite rounded'
                    onChange={(event) => setExpenseName(event.target.value)}
                  />
                  <input
                    type='number'
                    required
                    placeholder='Expense amount'
                    className='block no-spinner py-2 w-full bg-inherit px-2 text-md font-semibold border border-solid border-offWhite rounded'
                    onChange={(event) => setExpenseAmount(event.target.value)}
                  />
                  <select
                    className='block py-2 w-full bg-inherit px-2 text-md font-semibold border border-solid border-offWhite rounded'
                    onChange={(event) => setExpenseCurrency(event.target.value)}
                  >
                    {expenseCurrencyOptions.map((expenseCurrency) => (
                      <option
                        key={expenseCurrency.id}
                        value={expenseCurrency.value}
                      >
                        {expenseCurrency.symbol} - {expenseCurrency.value}
                      </option>
                    ))}
                  </select>
                  <button
                    type='submit'
                    className='block text-md hover:bg-offWhite transition-all duration-200 ease-in-out hover:text-gray-800 py-2 w-full max-w-[150px] px-2 border border-solid border-offWhite rounded'
                  >
                    Add expense
                  </button>
                </div>
              </form>
              <ul>
                {expenses.map((exp) => (
                  <li key={exp.expenseId}>
                    {exp.expenseId}. {exp.expenseName}: {exp.expenseAmount}{" "}
                    Added on {exp.date}{" "}
                    <button
                      className='inline-block text-md hover:bg-offWhite transition-all duration-200 ease-in-out hover:text-gray-800 py-2 w-full max-w-[150px] px-2 border border-solid border-offWhite rounded'
                      onClick={() => handleRemoveExpense(exp.expenseId)}
                    >
                      Remove Expense
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
