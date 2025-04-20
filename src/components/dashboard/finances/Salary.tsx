"use client";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { SalaryPropsDataTypes } from "@/types/propsDataTypes";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./../../ui/Button";
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
    <div className='bg-card salary-content mb-1 shadow-md max-w-[300px] max-h-fit shadow-black rounded-xl p-1 w-full flex flex-col justify-between gap-4'>
      <div className='flex text-center flex-col justify-between p-2'>
        <h2 className='text-muted font-medium text-2xl mb-6'>Total Balance</h2>
        <h3 className='text-white text-xl font-medium mb-6'>
          {savedSalary.salaryAmount || 0} {savedSalary.salaryCurrency}{" "}
          {savedSalary.salaryTimePeriod}
        </h3>
        {salaryError && (
          <p className='text-red-500 text-center py-2'>{salaryError}</p>
        )}
        {!viewMore && (
          <Button text='▼ Edit Salary' type='button' onClick={handleViewMore} />
        )}
        <div
          className={`flex flex-col gap-2 transition-all duration-700 ease-in-out overflow-hidden ${
            viewMore ? "h-full max-h-80 mt-6" : "h-0 max-h-0"
          }`}
        >
          <Input
            name='salaryAmount'
            placeholder='Salary Amount'
            onChange={handleChangeSalaryAmount}
            type='number'
            value={salary.salaryAmount}
            className='max-w-full'
          />
          <div className='flex gap-2'>
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
          </div>
          <Button
            onClick={() => {
              if (!salary.salaryAmount) return;
              handleSaveSalaryAmount();
              handleViewMore();
            }}
            disabled={!salary.salaryAmount}
            text='Set Salary & Hide Edit'
            type='button'
            className={`self-center ${
              !salary.salaryAmount
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
