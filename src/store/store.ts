import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/utils/slices/authSlice";
import expensesReducer from "../components/utils/slices/expensesSlice";
import salaryReducer from "../components/utils/slices/salarySlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    expenses: expensesReducer,
    salary: salaryReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
