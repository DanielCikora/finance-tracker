import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { ExpensesPropsDataTypes } from "@/types/propsDataTypes";
import Textarea from "@/components/ui/Textarea";
import XButton from "@/components/ui/XButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faTurnDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Select from "@/components/ui/Select";
import { expenseCategoryOptions } from "@/constants/constants";
export default function Expenses({
  handleChangeExpenses,
  expense,
  handleSaveExpenses,
  allExpenses,
  salaryCurrency,
  handleRemoveExpense,
  expenseError,
}: ExpensesPropsDataTypes) {
  const [viewDescription, setViewDescription] = useState<number | null>(null);
  const handleViewDescription = (index: number) => {
    setViewDescription(viewDescription === index ? null : index);
  };
  return (
    <div className='expenses-content shadow-md shadow-black max-w-[500px] max-h-[500px] rounded p-4 w-full h-full flex flex-col justify-between gap-4'>
      <ul className='expense-item flex flex-col gap-2 overflow-y-auto h-full p-2'>
        {allExpenses?.map((expense, index) => (
          <li
            className='shadow-md shadow-black rounded py-3 px-2 flex gap-2 justify-between items-center'
            key={`${expense.expenseId + 1}-${index}`}
          >
            <span className='w-fit'>{expense.expenseCategory}</span>
            <span className='flex flex-col gap-2 w-full'>
              <p>
                {expense.expenseId + 1}. {expense.expenseName}{" "}
                {expense.expenseCost} {salaryCurrency}
              </p>
              <p>{expense.expenseDate}</p>
              <button
                className='cursor-pointer'
                onClick={() => handleViewDescription(index)}
              >
                <FontAwesomeIcon
                  className='block text-2xl'
                  icon={faArrowAltCircleDown}
                />
              </button>
              <p
                className={`transition-all duration-200 ease-in-out left-0 overflow-hidden block ${
                  viewDescription === index
                    ? "h-full max-h-80 border border-solid border-black p-2 rounded"
                    : "h-0 max-h-0"
                }`}
              >
                {expense.expenseDescription || "No Description Found."}
              </p>
            </span>
            <XButton
              onClick={() => handleRemoveExpense(expense.expenseId)}
              type='button'
            />
          </li>
        ))}
      </ul>
      <div className='w-full flex flex-col max-h-fit gap-4 p-2'>
        {expenseError && (
          <p className='text-red font-medium text-lg'>{expenseError}</p>
        )}
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
          <Select
            name='expenseCategory'
            onChange={handleChangeExpenses}
            value={expense.expenseCategory}
          >
            {expenseCategoryOptions.map((expCategory) => (
              <option value={expCategory} key={expCategory}>
                {expCategory}
              </option>
            ))}
          </Select>
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
    </div>
  );
}
