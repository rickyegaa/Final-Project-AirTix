import axios from "axios";
import { setAirports } from "../reducers/postReducers";
import { toast } from "react-toastify";

export const getAllAirports = () => async (dispatch) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/airports`);
    dispatch(setAirports(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
