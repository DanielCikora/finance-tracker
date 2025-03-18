export type ExpensesDataTypes = {
  expenseName: string;
  expenseCost: string | number;
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
