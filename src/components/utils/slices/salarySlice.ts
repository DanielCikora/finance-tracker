import { createSlice } from "@reduxjs/toolkit";
const salarySlice = createSlice({
  name: "salary",
  initialState: { salaryAmount: null },
  reducers: {
    setSalaryAmount: (state, action) => {
      state.salaryAmount = action.payload;
      console.log("Action Payload: ", action.payload);
      console.log("Salary Amount State", state.salaryAmount);
      localStorage.setItem("salaryAmount", JSON.stringify(action.payload));
    },
  },
});
export const { setSalaryAmount } = salarySlice.actions;
export default salarySlice.reducer;
