import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogined: false,
  userData: {
    name: "",
    email: "",
    role: "",
  },
};

const userSlice = createSlice({  
  name: "user",
  initialState,
  reducers: {
    toggleLogin(state, payload) {
      console.log("payload", payload);
      // user/toggleLogin
      state.isLogined = true;
      state.userData = {
        name: payload.payload.name,
        email: payload.payload.email,
        role: payload.payload.role,
      };
    },
    logout(state, payload) {
      state.isLogined = false;
      state.userData = {
        name: "",
        email: "",
        role: "",
      };
    },
  },
});

export const { toggleLogin, logout } = userSlice.actions;
export default userSlice.reducer;
