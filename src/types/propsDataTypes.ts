import { ChangeEventHandler } from "react";
import {
  ExpensesDataTypes,
  SalaryCurrencyType,
  SalaryDataTypes,
  SalaryTimePeriod,
} from "./financesDataTypes";

export type SalaryPropsDataTypes = {
  handleSaveSalaryAmount: () => void;
  handleChangeSalaryAmount: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  >;
  salary: SalaryDataTypes;
  currencyOptions: SalaryCurrencyType[];
  timePeriodOptions: SalaryTimePeriod[];
  savedSalary: SalaryDataTypes;
  salaryError: string | null;
  currencySymbol: string;
};

export type ExpensesPropsDataTypes = {
  handleChangeExpenses: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  expense: ExpensesDataTypes;
  handleSaveExpenses: () => void;
  allExpenses: ExpensesDataTypes[] | null;
  handleRemoveExpense: (removeExpenseId: number) => void;
  expenseError: string | null;
  currencySymbol: string;
};

export type TotalsPropsDataTypes = {
  savedSalary: SalaryDataTypes;
  salary: SalaryDataTypes;
  totalExpensesAmount: number;
  remainingSalary: number;
};
