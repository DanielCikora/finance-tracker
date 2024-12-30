import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStateDataTypes } from "@/components/utils/constants/dataTypes";
const initialState: AuthStateDataTypes = {
  user: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ uid: string; email: string }>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});
export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
