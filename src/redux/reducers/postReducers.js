import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airports: [],
};

const postSlicer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setAirports: (state, action) => {
      state.airports = action.payload;
    },
  },
});

export const { setAirports } = postSlicer.actions;
export default postSlicer.reducer;
