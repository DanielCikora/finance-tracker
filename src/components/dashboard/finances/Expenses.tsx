import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { ExpensesPropsDataTypes } from "@/types/propsDataTypes";
import Textarea from "@/components/ui/Textarea";
import XButton from "@/components/ui/XButton";
import { useState } from "react";
import { expenseCategoryOptions, useCategoryIcon } from "@/constants/constants";
import Select from "@/components/ui/Select";
import Modal from "@/components/ui/Modal";
import PlusButton from "@/components/ui/PlusButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Expenses({
  handleChangeExpenses,
  expense,
  handleSaveExpenses,
  allExpenses,
  handleRemoveExpense,
  expenseError,
  currencySymbol,
}: ExpensesPropsDataTypes) {
  const [viewAddExpenses, setViewAddExpenses] = useState<boolean>(false);
  const [viewDescription, setViewDescription] = useState<number | null>(null);
  const handleViewDescription = (index: number) => {
    setViewDescription(viewDescription === index ? null : index);
  };
  return (
    <section className='expenses-content bg-card rounded-lg p-4 w-full h-fit flex flex-col justify-between gap-4'>
      <h2 className='text-muted md:text-2xl text-xl font-medium text-center'>
        Recent transactions
      </h2>
      {allExpenses?.length === 0 ? (
        <h2 className='text-white text-center font-semibold text-xl'>
          No expenses found. Please add expenses.
        </h2>
      ) : (
        <ul className='expense-item flex flex-col gap-2 sm:max-h-[240px] max-h-[220px] overflow-y-auto w-full h-full p-2'>
          {allExpenses?.map((expense, index) => {
            const icon = useCategoryIcon(expense.expenseCategory);
            return (
              <li
                className='text-white hover:bg-gray-600 hover:border-transparent sm:border-b border rounded-lg border-solid border-muted sm:py-1 py-4 px-2 flex flex-col w-full'
                key={`${expense.expenseId + 1}-${index + 1}`}
              >
                <div className='flex w-full'>
                  <div className='flex sm:flex-row flex-col w-full sm:justify-between items-center'>
                    <div className='text-xl gap-1 flex flex-col'>
                      <div className='flex sm:flex-row flex-col items-center gap-1'>
                        <i className='md:min-w-[40px]'>
                          {icon && (
                            <FontAwesomeIcon
                              className='block text-2xl'
                              icon={icon}
                            />
                          )}
                        </i>
                        <h4 className='text-md'>{expense.expenseName}</h4>
                      </div>
                      <p className='text-sm'>{expense.expenseDate}</p>
                    </div>
                    <div className='flex sm:flex-row flex-col md:gap-4 gap-2 items-center'>
                      <div className='text-center flex flex-col gap-1'>
                        <p className='text-expense w-full text-nowrap font-semibold text-2xl'>
                          - {expense.expenseCost} {currencySymbol}
                        </p>
                        <button
                          className='font-semibold text-blue cursor-pointer hover:underline underline-offset-2'
                          onClick={() => handleViewDescription(index)}
                        >
                          {viewDescription === index
                            ? "Hide Details"
                            : "View Details"}
                        </button>
                      </div>
                      <XButton
                        onClick={() => handleRemoveExpense(expense.expenseId)}
                        type='button'
                      />
                    </div>
                  </div>
                </div>
                <p
                  className={`transition-all duration-200 ease-in-out left-0 overflow-hidden block ${
                    viewDescription === index
                      ? "h-full max-h-140 border border-solid border-muted py-2 px-1 rounded"
                      : "h-0 max-h-0"
                  }`}
                >
                  {expense.expenseDescription || "No Description Found."}
                </p>
              </li>
            );
          })}
        </ul>
      )}
      <div className='w-full flex flex-col max-h-full gap-5 p-2'>
        <PlusButton
          onClick={() => setViewAddExpenses(true)}
          className='rounded-full max-w-fit py-1.5 px-2 self-end'
        />
        {viewAddExpenses && (
          <Modal
            closeModal={() => setViewAddExpenses(false)}
            maxWidth={400}
            maxHeight={400}
          >
            <div className='flex flex-col gap-4 w-full h-full'>
              <h2 className='text-2xl text-white font-semibold text-center mb-6'>
                Add Expense
              </h2>
              {expenseError && (
                <p className='text-expense text-center font-medium text-lg'>
                  {expenseError}
                </p>
              )}
              <div className='flex md:flex-row flex-col gap-4 justify-between'>
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
              <div className='w-full flex flex-col gap-20'>
                <Textarea
                  cols={1}
                  name='expenseDescription'
                  onChange={handleChangeExpenses}
                  placeholder='Expense Description (Optional)'
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
