"use client";
import {
  SalaryCurrencyType,
  SalaryDataTypes,
  SalaryTimePeriod,
} from "@/types/financesDataTypes";
import { useEffect, useState } from "react";
export default function useSalary() {
  const [salaryError, setSalaryError] = useState<string | null>(null);
  const [salary, setSalary] = useState<SalaryDataTypes>({
    salaryAmount: "",
    salaryCurrency: SalaryCurrencyType.EUR,
    salaryTimePeriod: SalaryTimePeriod.MONTH,
  });
  const [savedSalary, setSavedSalary] = useState<SalaryDataTypes>({
    salaryAmount: "",
    salaryCurrency: SalaryCurrencyType.EUR,
    salaryTimePeriod: SalaryTimePeriod.MONTH,
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
    if (!salary.salaryAmount) {
      setSalaryError("Please input salary amount.");
      return;
    }
    setSavedSalary(salary);
    localStorage.setItem("salary", JSON.stringify(salary));
    setSalaryError(null);
  };
  return {
    salary,
    savedSalary,
    salaryError,
    handleChangeSalaryAmount,
    handleSaveSalaryAmount,
  };
}
