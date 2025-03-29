"use client";
import {
  SalaryCurrencyType,
  SalaryDataTypes,
  SalaryTimePeriod,
} from "@/types/financesDataTypes";
import { useEffect, useState } from "react";
export default function useSalary() {
  const [salary, setSalary] = useState<SalaryDataTypes>({
    salaryAmount: "",
    salaryCurrency: SalaryCurrencyType.USD,
    salaryTimePeriod: SalaryTimePeriod.YEARLY,
  });
  const [savedSalary, setSavedSalary] = useState<SalaryDataTypes>({
    salaryAmount: "",
    salaryCurrency: SalaryCurrencyType.USD,
    salaryTimePeriod: SalaryTimePeriod.YEARLY,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedSalary = localStorage.getItem("salary");
      if (storedSalary) {
        setSavedSalary(JSON.parse(storedSalary));
      }
    }
  }, []);
  const handleChangeSalaryAmount = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setSalary((prevSalary) => ({
      ...prevSalary,
      [name]: name === "salaryAmount" ? Number(value) : value,
    }));
  };
  const handleSaveSalaryAmount = () => {
    setSavedSalary(salary);
    localStorage.setItem("salary", JSON.stringify(salary));
  };
  return {
    salary,
    savedSalary,
    handleChangeSalaryAmount,
    handleSaveSalaryAmount,
  };
}
