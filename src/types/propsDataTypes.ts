import { ChangeEventHandler } from "react";
import {
  ExpensesDataTypes,
  SalaryCurrencyType,
  SalaryDataTypes,
} from "./financesDataTypes";

export type SalaryPropsDataTypes = {
  handleSaveSalaryAmount: () => void;
  handleChangeSalaryAmount: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  >;
  salary: SalaryDataTypes;
  currencyOptions: SalaryCurrencyType[];
  savedSalary: SalaryDataTypes;
};

export type ExpensesPropsDataTypes = {
  handleChangeExpenses: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  expense: ExpensesDataTypes;
  handleSaveExpenses: () => void;
  allExpenses: ExpensesDataTypes[];
  salaryCurrency: SalaryCurrencyType;
  handleRemoveExpense: (removeExpenseId: number) => void;
};

export type TotalsPropsDataTypes = {
  savedSalary: SalaryDataTypes;
  salary: SalaryDataTypes;
  totalExpensesAmount: number;
  remainingSalary: number;
};
