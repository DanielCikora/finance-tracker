import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { ExpensesPropsDataTypes } from "@/types/propsDataTypes";
import Textarea from "@/components/ui/Textarea";
import XButton from "@/components/ui/XButton";
export default function Expenses({
  handleChangeExpenses,
  expense,
  handleSaveExpenses,
  allExpenses,
  salaryCurrency,
  handleRemoveExpense,
}: ExpensesPropsDataTypes) {
  return (
    <div className='expenses-content shadow-md shadow-black max-w-[500px] rounded p-4 w-full flex flex-col justify-between gap-2'>
      <div className='w-full flex flex-col max-h-fit gap-4'>
        <div className='flex gap-2 w-full justify-between'>
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
      </div>
      <Button
        onClick={handleSaveExpenses}
        text='Set Expense'
        type='button'
        className='mt-4'
      />
      <ul className='expense-item flex flex-col gap-2'>
        {allExpenses.map((expense, index) => (
          <li
            className='shadow-md shadow-black rounded py-3 px-2 flex gap-2 justify-between items-center'
            key={expense.expenseId}
          >
            <span className='flex flex-col gap-2'>
              <p>
                {index + 1}. {expense.expenseName} {expense.expenseCost}{" "}
                {salaryCurrency}
              </p>
              <p>{expense.expenseDate}</p>
            </span>
            <XButton
              onClick={() => handleRemoveExpense(expense.expenseId)}
              type='button'
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
