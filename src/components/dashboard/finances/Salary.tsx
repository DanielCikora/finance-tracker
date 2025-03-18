import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import { SalaryPropsDataTypes } from "@/types/propsDataTypes";
export default function Salary({
  handleSaveSalaryAmount,
  handleChangeSalaryAmount,
  salary,
  currencyOptions,
}: SalaryPropsDataTypes) {
  return (
    <div className='dashboard-salary w-full'>
      <Button
        onClick={handleSaveSalaryAmount}
        text='Set Salary'
        type='button'
      />
      <Input
        name='salaryAmount'
        placeholder='Expense Amount'
        onChange={handleChangeSalaryAmount}
        type='number'
        value={salary.salaryAmount}
      />
      <Select
        name='salaryCurrency'
        onChange={handleChangeSalaryAmount}
        value={salary.salaryCurrency}
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </Select>
    </div>
  );
}
