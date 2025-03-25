import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { ExpensesPropsDataTypes } from "@/types/propsDataTypes";
import Textarea from "@/components/ui/Textarea";
import XButton from "@/components/ui/XButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Select from "@/components/ui/Select";
export default function Expenses({
  handleChangeExpenses,
  expense,
  handleSaveExpenses,
  allExpenses,
  salaryCurrency,
  handleRemoveExpense,
}: ExpensesPropsDataTypes) {
  const [viewDescription, setViewDescription] = useState<boolean>(false);
  const handleViewDescription = () => {
    setViewDescription((prevViewDesc) => !prevViewDesc);
  };
  return (
    <div className='expenses-content shadow-md shadow-black max-w-[500px] rounded p-4 w-full flex flex-col justify-between gap-4'>
      <div className='w-full flex flex-col max-h-fit gap-4'>
        <div className='flex gap-4 w-full justify-between'>
          <Input
            name='expenseName'
            placeholder='Expense Name'
            onChange={handleChangeExpenses}
            type='text'
            value={expense.expenseName}
          />
          <Input
            name='expenseCost'
            placeholder='Expense Cost'
            onChange={handleChangeExpenses}
            type='number'
            value={expense.expenseCost}
          />
        </div>
        <Textarea
          cols={1}
          name='expenseDescription'
          onChange={handleChangeExpenses}
          placeholder='Expense Description'
          rows={3}
          value={expense.expenseDescription}
        />
        <Button onClick={handleSaveExpenses} text='Set Expense' type='button' />
      </div>
      <ul className='expense-item flex flex-col gap-2'>
        {allExpenses.map((expense, index) => (
          <li
            className='relative shadow-md shadow-black rounded py-3 px-2 flex gap-2 justify-between items-center'
            key={expense.expenseId}
          >
            <span className='relative flex flex-col gap-2'>
              <p>
                {index + 1}. {expense.expenseName} {expense.expenseCost}{" "}
                {salaryCurrency}
              </p>
              <p>{expense.expenseDate}</p>
              <p
                className={`absolute bottom-0 transition-all duration-200 ease-in-out left-0 overflow-hidden block ${
                  viewDescription ? "h-full max-h-80" : "h-0 max-h-0"
                }`}
              >
                {expense.expenseDescription}
              </p>
            </span>
            <XButton
              onClick={() => handleRemoveExpense(expense.expenseId)}
              type='button'
            />
            <FontAwesomeIcon
              className='block absolute right-0 top-5'
              onClick={handleViewDescription}
              icon={faTurnDown}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
