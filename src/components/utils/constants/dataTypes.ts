export interface AuthStateDataTypes {
  user: null | { uid: string; email: string };
}
export interface FirebaseConfigurationDataTypes {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined;
  measurementId: string | undefined;
}
export interface ExpensesDataTypes {
  expenseName: string;
  expenseId: number;
  expenseAmount: string | number;
  expenseCurrency: string;
  date: string;
}
export interface expenseCurrencyDataTypes {
  id: number;
  value: string;
  symbol: string;
}
