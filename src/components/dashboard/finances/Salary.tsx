"use client";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { SalaryPropsDataTypes } from "@/types/propsDataTypes";
import Button from "./../../ui/Button";
import Card from "@/components/ui/Card";
import PlusButton from "@/components/ui/PlusButton";
import Modal from "@/components/ui/Modal";
import useModal from "@/hooks/useModal";
export default function Salary({
  handleSaveSalaryAmount,
  handleChangeSalaryAmount,
  salary,
  currencyOptions,
  timePeriodOptions,
  savedSalary,
  salaryError,
  currencySymbol,
}: SalaryPropsDataTypes) {
  const { openModal, closeModal, isOpen } = useModal();
  return (
    <Card
      cardTitle='Income'
      cardDescription={`${savedSalary.salaryAmount || 0} ${currencySymbol} /
          ${savedSalary.salaryTimePeriod || "YEAR"}`}
      descriptionStyle='text-income'
    >
      <PlusButton
        className='absolute top-6 right-7'
        onClick={() => openModal("salaryModal")}
      />
      {isOpen("salaryModal") && (
        <Modal maxHeight={300} maxWidth={400} closeModal={closeModal}>
          <h2 className='font-semibold text-2xl text-white mb-4 text-center'>
            Salary
          </h2>
          <div className='flex text-center flex-col justify-between'>
            {salaryError && (
              <p className='text-red-500 text-center py-2'>{salaryError}</p>
            )}
            <div className='flex flex-col gap-2'>
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
                  closeModal();
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
        </Modal>
      )}
    </Card>
  );
}
