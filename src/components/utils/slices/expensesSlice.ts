import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExpensesDataTypes } from "../constants/dataTypes";
const initialState: ExpensesDataTypes = {
  expenseName: "",
  expenseId: 1,
  expenseAmount: 0,
  expenseCurrency: "",
  date: "",
};
const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {},
  },
});
export const { addExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
