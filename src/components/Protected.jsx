import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthToken = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async (token) => {
      try {
        await axios.get(`${process.env.REACT_APP_API}/auth/whoami`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response.status === 401) {
            localStorage.removeItem("token");

            toast.error("Invalid Token");

            return (window.location.href = "/");
          }
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };

    const token = localStorage.getItem("token");

    // Cek Kondisi Ketika User Belum Login
    if (!token) {
      toast.warning("Silakan Login dan Register");
      return navigate("/login");
    }

    getProfile(token);
  }, [navigate]);

  return children;
};

export default AuthToken;
