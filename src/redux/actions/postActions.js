import axios from "axios";
import { setAirports, setTickets } from "../reducers/postReducers";
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
