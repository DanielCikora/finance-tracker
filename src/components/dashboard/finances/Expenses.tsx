import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { ExpensesPropsDataTypes } from "@/types/propsDataTypes";
export default function Expenses({
  handleExpenses,
  expenses,
  handleSaveExpenses,
  allExpenses,
  salaryCurrency,
}: ExpensesPropsDataTypes) {
  return (
    <div className='expenses-content w-full'>
      <Input
        name='expenseName'
        placeholder='Expense Name'
        onChange={handleExpenses}
        type='text'
        value={expenses.expenseName}
      />
      <Input
        name='expenseCost'
        placeholder='Expense Cost'
        onChange={handleExpenses}
        type='number'
        value={expenses.expenseCost}
      />
      <Button onClick={handleSaveExpenses} text='Set Expenses' type='button' />
      <div className='expenses-items'>
        {allExpenses.map((expense, index) => (
          <div key={index}>
            {expense.expenseName} {expense.expenseCost} {salaryCurrency}
          </div>
        ))}
      </div>
    </div>
  );
}
