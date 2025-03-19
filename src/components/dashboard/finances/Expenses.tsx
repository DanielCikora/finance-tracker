import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { ExpensesPropsDataTypes } from "@/types/propsDataTypes";
export default function Expenses({
  handleChangeExpenses,
  expense,
  handleSaveExpenses,
  allExpenses,
  salaryCurrency,
  handleRemoveExpense,
}: ExpensesPropsDataTypes) {
  return (
    <div className='expenses-content shadow-md shadow-black rounded p-2 w-full flex h-full flex-col justify-between gap-2'>
      <div>
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
        <Button
          onClick={handleSaveExpenses}
          text='Set Expenses'
          type='button'
        />
      </div>
      <ul className='expense-item list-disc'>
        {allExpenses.map((expense, index) => (
          <li
            className='shadow-md shadow-black rounded py-3 px-2'
            key={expense.expenseId}
          >
            {index + 1}. {expense.expenseName} {expense.expenseCost}{" "}
            {salaryCurrency}
            <Button
              text='RM'
              type='button'
              onClick={() => handleRemoveExpense(expense.expenseId)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
