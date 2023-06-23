import axios from "axios";
import { setAirports } from "../reducers/postReducers";
import { toast } from "react-toastify";

export const getAllAirports = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://648313a9f2e76ae1b95be96f.mockapi.io/tiket`
    );
    dispatch(setAirports(response.data));
    // console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
