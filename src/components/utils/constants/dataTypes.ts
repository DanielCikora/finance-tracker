export interface AuthStateDataTypes {
  user: null | { uid: string; email: string };
}
export interface ExpensesDataTypes {
  expenseName: string;
  expenseId: number;
  expenseAmount: string | number;
  expenseCurrency: string;
  date: string;
}
