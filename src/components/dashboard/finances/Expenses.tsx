import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { ExpensesPropsDataTypes } from "@/types/propsDataTypes";
import Textarea from "@/components/ui/Textarea";
import XButton from "@/components/ui/XButton";
import { useState } from "react";
import { expenseCategoryOptions } from "@/constants/constants";
import Select from "@/components/ui/Select";
import Modal from "@/components/ui/Modal";
import PlusButton from "@/components/ui/PlusButton";
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
  const [viewAddExpenses, setViewAddExpenses] = useState<boolean>(false);
  const handleViewDescription = (index: number) => {
    setViewDescription(viewDescription === index ? null : index);
  };
  return (
    <section className='bg-card expenses-content shadow-md shadow-black max-w-[1000px] max-h-[500px] rounded p-4 w-full h-full flex flex-col justify-between gap-4'>
      <ul className='expense-item flex flex-col gap-2 overflow-y-auto h-full p-2'>
        {allExpenses?.map((expense, index) => (
          <li
            className='shadow-md shadow-black rounded py-3 px-2 flex flex-col w-full'
            key={`${expense.expenseId + 1}-${index}`}
          >
            <span className='flex flex-row items-center justify-between w-full'>
              <p className='w-full max-w-[160px]'>
                {expense.expenseId + 1}. {expense.expenseCategory}
              </p>
              <p className='w-full max-w-[240px]'>
                {expense.expenseName} - {expense.expenseCost} {salaryCurrency}
              </p>
              <p className='w-full max-w-[240px]'>{expense.expenseDate}</p>
              <div className='w-full max-w-[240px] flex gap-4 items-center justify-end'>
                <button
                  className=' text-blue cursor-pointer hover:underline underline-offset-2'
                  onClick={() => handleViewDescription(index)}
                >
                  View Details
                </button>
                <XButton
                  onClick={() => handleRemoveExpense(expense.expenseId)}
                  type='button'
                />
              </div>
            </span>
            <p
              className={`transition-all duration-200 ease-in-out left-0 overflow-hidden block ${
                viewDescription === index
                  ? "h-full max-h-80 border border-solid border-black p-2 rounded"
                  : "h-0 max-h-0"
              }`}
            >
              {expense.expenseDescription || "No Description Found."}
            </p>
          </li>
        ))}
      </ul>
      <div className='w-full flex flex-col max-h-fit gap-4 p-2'>
        {expenseError && (
          <p className='text-red font-medium text-lg'>{expenseError}</p>
        )}
        <PlusButton
          onClick={() => setViewAddExpenses(true)}
          className='rounded-full max-w-fit py-1.5 px-2 self-end'
        />
        {viewAddExpenses && (
          <Modal
            closeModal={() => setViewAddExpenses(false)}
            maxWidth={800}
            maxHeight={500}
          >
            <div className='flex flex-col gap-4 w-full h-full'>
              <div className='flex gap-4 justify-between'>
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
              <div className='w-full flex flex-col gap-40'>
                <Textarea
                  cols={1}
                  name='expenseDescription'
                  onChange={handleChangeExpenses}
                  placeholder='Expense Description'
                  rows={4}
                  value={expense.expenseDescription}
                />
                <Button
                  onClick={handleSaveExpenses}
                  text='Set Expense'
                  type='button'
                />
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}
