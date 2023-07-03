import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NoTokenAuth = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async (token) => {
      try {
        await axios.get(`${process.env.REACT_APP_API}/auth/whoami`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        window.location.href = "/";
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response.status === 401) {
            if (error.response.data.message === "Token JWT Expired") {
              RefreshToken();
            } else {
              localStorage.removeItem("token");
              toast.error("Invalid Token");
              return (window.location.href = "/");
            }
          }
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };

    const token = localStorage.getItem("token");

    if (token) {
      getProfile(token);
    }
  }, [navigate]);

  return children;
};

const RefreshToken = () => {
  const refresh_token = localStorage.getItem("refresh_token");

  let data = JSON.stringify({
    refreshToken: refresh_token,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_API}/auth/refresh-token`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  async function makeRequest() {
    try {
      const response = await client.request(config);
      console.log(JSON.stringify(response.data));

      const { access_token } = response.data.data;

      localStorage.setItem("token", access_token);
    } catch (error) {
      console.log(error);
    }
  }

  makeRequest();
};

export default NoTokenAuth;
