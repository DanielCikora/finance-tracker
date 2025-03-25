import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import { SalaryPropsDataTypes } from "@/types/propsDataTypes";
export default function Salary({
  handleSaveSalaryAmount,
  handleChangeSalaryAmount,
  salary,
  currencyOptions,
  timePeriodOptions,
}: SalaryPropsDataTypes) {
  return (
    <div className='salary-content shadow-md max-w-[500px] max-h-fit shadow-black rounded p-4 w-full flex flex-col justify-between gap-4'>
      <div className='flex gap-4 justify-between'>
        <Input
          name='salaryAmount'
          placeholder='Salary Amount'
          onChange={handleChangeSalaryAmount}
          type='number'
          value={salary.salaryAmount}
          className='max-w-full'
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
        <Select
          onChange={handleSaveSalaryAmount}
          name='salaryTimePeriod'
          value={salary.salaryTimePeriod}
        >
          {timePeriodOptions.map((timePeriod) => (
            <option key={timePeriod}>{timePeriod}</option>
          ))}
        </Select>
      </div>
      <Button
        onClick={handleSaveSalaryAmount}
        text='Set Salary'
        type='button'
        className='self-center'
      />
    </div>
  );
}
