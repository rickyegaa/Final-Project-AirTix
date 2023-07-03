import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airports: null,
  tickets: null,
  mock: null,
  orders: null,
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
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { setAirports, setTickets, setMock, setOrders } =
  postSlicer.actions;
export default postSlicer.reducer;
