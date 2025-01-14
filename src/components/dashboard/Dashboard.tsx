"use client";
import MainTitle from "../ui/MainTitle";
import { ChangeEventHandler, useState } from "react";
import { ExpensesDataTypes } from "../utils/constants/dataTypes";
import { expenseCurrencyDataTypes } from "../utils/constants/dataTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { setSalaryAmount } from "../utils/slices/salarySlice";
const Dashboard = () => {
  const [expenses, setExpenses] = useState<ExpensesDataTypes[]>([]);
  const [expenseName, setExpenseName] = useState<string>("");
  const [expenseAmount, setExpenseAmount] = useState<string | number>(0);
  const [expenseCurrency, setExpenseCurrency] = useState<string>("$");
  const [expenseId, setExpenseId] = useState<number>(1);
  const [showExpensesModal, setShowExpensesModal] = useState<boolean>(false);
  const [salary, setSalary] = useState<number | null>(null);
  const [showSalaryModal, setShowSalaryModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleShowExpensesModal = () => {
    setShowExpensesModal(true);
  };
  const handleCloseExpenseModal = () => {
    setShowExpensesModal(false);
  };
  const expenseCurrencyOptions: expenseCurrencyDataTypes[] = [
    { id: 0, value: "USD", symbol: "$" },
    { id: 1, value: "EUR", symbol: "€" },
    { id: 2, value: "INR", symbol: "₹" },
    { id: 3, value: "GBP", symbol: "£" },
    { id: 4, value: "CAD", symbol: "C$" },
    { id: 5, value: "AUD", symbol: "A$" },
    { id: 6, value: "JPY", symbol: "¥" },
    { id: 7, value: "RUB", symbol: "₽" },
    { id: 8, value: "CHF", symbol: "CHF" },
    { id: 9, value: "CNH", symbol: "¥" },
    { id: 10, value: "HKD", symbol: "HK$" },
    { id: 11, value: "NZD", symbol: "NZ$" },
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
    setExpenseCurrency(expenseCurrency);
  };
  const handleRemoveExpense = (id: number) => {
    setExpenses((prevExpense) =>
      prevExpense.filter((expense) => expense.expenseId !== id)
    );
  };
  const handleAddSalary = () => {
    setSalary(salary);
    dispatch(setSalaryAmount(salary));
    setShowSalaryModal(false);
  };
  const handleShowSalaryModal = () => {
    setShowSalaryModal(true);
  };
  const handleCloseSalaryModal = () => {
    setShowSalaryModal(false);
  };
  const salaryAmount = localStorage.getItem("salaryAmount");
  return (
    <section className='dashboard'>
      <div className='wrapper'>
        <MainTitle titleText='Dashboard' className='py-2' />
        <div className='dashboard-content'>
          <div>
            <Button buttonText='Input Salary' onClick={handleShowSalaryModal} />
            <h2>
              {salaryAmount} {expenseCurrency}
            </h2>
            {showSalaryModal && (
              <div className='fixed z-40 inset-0 w-dvw h-dvh grid place-items-center bg-black bg-opacity-30'>
                <div className='expenses-modal relative z-50 bg-offBlack min-h-[400px] max-w-[800px] w-full p-4 rounded'>
                  <button
                    onClick={handleCloseSalaryModal}
                    className='close-modal absolute top-1 right-2'
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className='block text-3xl'
                    />
                  </button>
                  <input
                    type='number'
                    className='block no-spinner py-2 w-full bg-inherit px-2 text-md font-semibold border border-solid border-offWhite rounded'
                    onChange={(event) => setSalary(Number(event.target.value))}
                    required
                  />
                  <select
                    className='block py-2 w-full bg-inherit px-2 text-md font-semibold border border-solid border-offWhite rounded'
                    onChange={(event) => setExpenseCurrency(event.target.value)}
                  >
                    {expenseCurrencyOptions.map((expenseCurrency) => (
                      <option
                        key={expenseCurrency.id}
                        value={expenseCurrency.symbol}
                      >
                        {expenseCurrency.symbol} - {expenseCurrency.value}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleAddSalary}
                    className='block text-md hover:bg-offWhite transition-all duration-200 ease-in-out hover:text-gray-800 py-2 w-full max-w-[150px] px-2 border border-solid border-offWhite rounded'
                  >
                    Input salary
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className='flex flex-col gap-4 justify-center items-center min-h-[300px] p-2 max-w-[300px] w-full h-full bg-offBlack text-offWhite rounded'>
            <Button
              buttonText='Add Expenses'
              onClick={handleShowExpensesModal}
            />
            <h3 className='text-2xl'>Total expenses: </h3>
            <h4 className='text-5xl'>
              {expenses.reduce((total, expense) => {
                const amount =
                  typeof expense.expenseAmount === "string"
                    ? parseFloat(expense.expenseAmount)
                    : expense.expenseAmount;
                return total + amount;
              }, 0)}{" "}
              {expenseCurrency}
            </h4>
            {showExpensesModal && (
              <div className='fixed z-40 inset-0 w-dvw h-dvh grid place-items-center bg-black bg-opacity-30'>
                <div className='expenses-modal relative z-50 bg-offBlack min-h-[400px] max-w-[800px] w-full p-4 rounded'>
                  <button
                    onClick={handleCloseExpenseModal}
                    className='close-modal absolute top-1 right-2'
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className='block text-3xl'
                    />
                  </button>
                  <form onSubmit={handleAddExpense}>
                    <div className='flex gap-4 px-2'>
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
                        onChange={(event) =>
                          setExpenseAmount(event.target.value)
                        }
                      />
                      <select
                        className='block py-2 w-full bg-inherit px-2 text-md font-semibold border border-solid border-offWhite rounded'
                        onChange={(event) =>
                          setExpenseCurrency(event.target.value)
                        }
                      >
                        {expenseCurrencyOptions.map((expenseCurrency) => (
                          <option
                            key={expenseCurrency.id}
                            value={expenseCurrency.symbol}
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
                  <ul className='mt-2'>
                    {expenses.map((exp) => (
                      <li
                        className='flex justify-between items-center p-2 hover:bg-gray-600 rounded'
                        key={exp.expenseId}
                      >
                        <div className='flex-1 pr-4'>
                          <p className='text-xl'>
                            {exp.expenseId}. {exp.expenseName}:{" "}
                            {exp.expenseAmount} {exp.expenseCurrency}
                          </p>
                          <p className='text-sm'>{exp.date}</p>
                        </div>
                        <button
                          className='text-md hover:bg-gray-200 transition-all duration-200 ease-in-out hover:text-gray-800 py-2 px-4 border border-solid border-gray-300 rounded'
                          onClick={() => handleRemoveExpense(exp.expenseId)}
                        >
                          Remove Expense
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
