import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    signin: null,
  },
  reducers: {
    login: (state, action) => {
      state.signin = action.payload;
    },
    logout: (state) => {
      state.signin = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
