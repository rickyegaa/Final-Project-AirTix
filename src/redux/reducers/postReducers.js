import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airports: null,
  tickets: null,
};

const postSlicer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setAirports: (state, action) => {
      state.airports = action.payload;
    },
    setTickets: (state, action) => {
      state.tickets = action.payload;
    },
  },
});

export const { setAirports, setTickets } = postSlicer.actions;
export default postSlicer.reducer;
