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

export enum SalaryTimePeriod {
  HOURLY = "Hourly",
  DAILY = "Daily",
  WEEKLY = "Weekly",
  MONTHLY = "Monthly",
  YEARLY = "Yearly",
}

export type SalaryDataTypes = {
  salaryCurrency: SalaryCurrencyType;
  salaryAmount: number | string;
  salaryTimePeriod: SalaryTimePeriod;
};
