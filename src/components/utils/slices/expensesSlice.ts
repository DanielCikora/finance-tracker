import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface expensesDataTypes {
  expenses: Array<string>;
  nextId: number;
}
const initialState: expensesDataTypes = {
  expenses: [],
  nextId: 1,
};
const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (
      state,
      action: PayloadAction<{
        expenses: Array<string>;
        nextId: number;
      }>
    ) => {
      const newExpense = action.payload;
      const stringedExpense = JSON.stringify(newExpense.expenses);
      state.expenses.push(stringedExpense);
      state.nextId += 1;
      localStorage.setItem("expenses", JSON.stringify(state.expenses));
      localStorage.setItem("nextId", JSON.stringify(state.nextId));
    },
    initializeExpenses: (state) => {
      const savedExpenses = localStorage.getItem("expenses");
      const savedNextId = localStorage.getItem("nextId");
      if (savedExpenses) {
        state.expenses = JSON.parse(savedExpenses);
      }
      if (savedNextId) {
        state.nextId = JSON.parse(savedNextId);
      }
    },
  },
});
export const { addExpense, initializeExpenses } = expensesSlice.actions;
export default expensesSlice.reducer;
