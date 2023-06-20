import { setIsLoggedIn, setToken, setUser } from "../reducers/authReducers";
import axios from "axios";
import { toast } from "react-toastify";

// Logout
export const logout = (navigate) => (dispatch) => {
  try {
    dispatch(setToken(null));
    dispatch(setIsLoggedIn(false));
    dispatch(setUser(null));

    if (navigate) navigate("/");
  } catch (error) {
    toast.error(error?.message);
  }
};

// Me
export const getMe =
  (navigate, navigatePath, navigatePathError) => async (dispatch, getState) => {
    try {
      const { token } = getState().auth;

      if (!token) return;

      const response = await axios.get(
        `${process.env.REACT_APP_API}/v1/auth/whoami`,
        {
          headers: {
            Authorization: ` ${token}`,
          },
        }
      );

      const data = response.data.data;

      dispatch(setUser(data));

      if (navigatePath) navigate(navigatePath);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response.status === 401) {
          dispatch(logout(null));

          if (navigatePathError) navigate(navigatePathError);
          return;
        }

        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

// Login
export const login = (data, navigate) => async (dispatch) => {
  try {
    let config = {
      method: "post",
      url: `${process.env.REACT_APP_API}/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    const { token } = response.data.data;

    toast.success("Login Successfull", {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate("/");

    dispatch(setToken(token));
    dispatch(setIsLoggedIn(true));
    dispatch(getMe(null, null, null));

    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

// Register
export const register = (data, navigate) => async (dispatch) => {
  try {
    let config = {
      method: "post",
      url: `${process.env.REACT_APP_API}/auth/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    const { token } = response.data.data;

    toast.success("Registered Successfull", {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate("/Login");

    dispatch(setToken(token));
    dispatch(setIsLoggedIn(true));
    dispatch(getMe(null, null, null));

    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

// Verifikasi
export const verify = () => async (getState) => {
  try {
    const { token } = getState().auth;

    const result = await axios.post(
      `${process.env.REACT_APP_API}/auth/resend-otp`,
      {
        headers: {
          "Content-tpye": "application/json",
        },
      }
    );
    toast.success(result.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
    throw error;
  }
};
