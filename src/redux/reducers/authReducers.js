import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  isLoggedIn: !!localStorage.getItem("token"),
  user: [],
  // otp: localStorage.getItem("otp") || null,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }

      state.token = action.payload;
    },
    // setOTP: (state, action) => {
    //   if (action.payload) {
    //     localStorage.setItem("otp", action.payload);
    //   } else {
    //     localStorage.removeItem("otp");
    //   }

    //   state.token = action.payload;
    // },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setIsLoggedIn, setUser, setOTP } = authSlicer.actions;

export default authSlicer.reducer;
