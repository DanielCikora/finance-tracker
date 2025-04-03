import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import { SalaryPropsDataTypes } from "@/types/propsDataTypes";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
export default function Salary({
  handleSaveSalaryAmount,
  handleChangeSalaryAmount,
  salary,
  currencyOptions,
  timePeriodOptions,
  savedSalary,
  salaryError,
}: SalaryPropsDataTypes) {
  const [viewMore, setViewMore] = useState<boolean>(false);
  const handleViewMore = () => {
    setViewMore((prevViewMore) => !prevViewMore);
  };
  return (
    <div className='salary-content shadow-md max-w-[500px] max-h-fit shadow-black rounded p-6 w-full flex flex-col justify-between gap-4'>
      <div className='flex flex-col justify-between'>
        <h2 className='text-center text-2xl font-semibold'>
          {savedSalary.salaryAmount || 0} {savedSalary.salaryCurrency}{" "}
          {savedSalary.salaryTimePeriod}
        </h2>
        {salaryError && (
          <p className='text-red-500 text-center py-2'>{salaryError}</p>
        )}
        <button
          className='cursor-pointer'
          onClick={handleViewMore}
          type='button'
        >
          <FontAwesomeIcon
            className={`block text-4xl text-dark translate-all duration-700 ease-in-out ${
              viewMore ? "rotate-180" : "rotate-0"
            }`}
            icon={faCaretDown}
          />
        </button>
        <div
          className={`flex flex-col gap-4 transition-all duration-700 ease-in-out overflow-hidden ${
            viewMore ? "h-full max-h-80" : "h-0 max-h-0"
          }`}
        >
          <Input
            name='salaryAmount'
            placeholder='Salary Amount'
            onChange={handleChangeSalaryAmount}
            type='number'
            value={salary.salaryAmount}
            className='max-w-full text-center'
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
            onChange={handleChangeSalaryAmount}
            name='salaryTimePeriod'
            value={salary.salaryTimePeriod}
          >
            {timePeriodOptions.map((timePeriod) => (
              <option key={timePeriod} value={timePeriod}>
                {timePeriod}
              </option>
            ))}
          </Select>
          <Button
            onClick={handleSaveSalaryAmount}
            text='Set Salary'
            type='button'
            className='self-center'
          />
        </div>
      </div>
    </div>
  );
}
