import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
          // If not valid token
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            toast.error(data.message);
            return (window.location.href = "/");
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

export default NoTokenAuth;