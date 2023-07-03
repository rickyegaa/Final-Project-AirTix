import axios from "axios";
import { setAirports, setMock, setTickets } from "../reducers/postReducers";
import { toast } from "react-toastify";

export const getTicketDetails = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://648313a9f2e76ae1b95be96f.mockapi.io/tiket`
    );
    dispatch(setTickets(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
export const getApiAirports = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://airtix-develop.up.railway.app/airports`
    );
    dispatch(setAirports(response.data.data));
    // console.log(setAirports(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
export const getMockApi = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://648313a9f2e76ae1b95be96f.mockapi.io/airport`
    );
    dispatch(setMock(response.data));
    // console.log(setAirports(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
export const getOrderDetails = () => async (getState, dispatch) => {
  try {
    const { token } = getState().auth;

    const response = await axios.get(
      `https://airtix-develop.up.railway.app/orders-user/`,
      {
        headers: {
          Authorization: ` ${token}`,
        },
      }
    );
    dispatch(setMock(response.data));
    console.log(setAirports(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
