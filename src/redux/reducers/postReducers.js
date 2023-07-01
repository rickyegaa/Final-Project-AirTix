import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airports: null,
  tickets: null,
  mock: null,
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
    setMock: (state, action) => {
      state.mock = action.payload;
    },
  },
});

export const { setAirports, setTickets, setMock } = postSlicer.actions;
export default postSlicer.reducer;
