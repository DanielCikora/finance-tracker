export type ExpensesDataTypes = {
  expenseId: number;
  expenseName: string;
  expenseCost: string | number;
  expenseDescription: string;
  expenseDate: string;
};

export enum SalaryCurrencyType {
  EUR = "EUR",
  USD = "USD",
  GBP = "GBP",
  INR = "INR",
}

export type SalaryDataTypes = {
  salaryCurrency: SalaryCurrencyType;
  salaryAmount: number | string;
};
