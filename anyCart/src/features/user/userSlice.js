import { createSlice } from "@reduxjs/toolkit";

const getUserFrmLS = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

// initial state
const defaultState = {
  user: getUserFrmLS(),
};

const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
    login: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
  },
});

export const { logout, login, register } = userSlice.actions;
export default userSlice.reducer;
