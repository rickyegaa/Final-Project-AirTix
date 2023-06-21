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
export const getMe = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;

    const result = await axios.get(`${process.env.REACT_APP_API}/auth/whoami`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    dispatch(setUser(result.data.data));
  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      dispatch(setToken(null));
      // callback(error.response.status);
    }
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
// export const verify = () => async (getState) => {
//   try {
//     const { token } = getState().auth;

//     const result = await axios.post(
//       `${process.env.REACT_APP_API}/auth/resend-otp`,
//       {
//         headers: {
//           "Content-tpye": "application/json",
//         },
//       }
//     );
//     toast.success(result.data.message);
//   } catch (error) {
//     toast.error(error.response.data.message);
//     throw error;
//   }
// };

export const registerLoginWithGoogle =
  (accessToken, navigate) => async (dispatch) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        //this API from Fahmi Alfareza
        url: `https://km4-challenge-5-api.up.railway.app/api/v1/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      dispatch(setToken(token));
      dispatch(setIsLoggedIn(true));
      dispatch(getMe(null, null, null));

      // We will use navigate from react-router-dom by passing the argument because the useNavigate() can only used in component
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };
