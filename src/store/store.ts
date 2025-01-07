import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/utils/slices/authSlice";
import expensesReducer from "../components/utils/slices/expensesSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    expenses: expensesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
