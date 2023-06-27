import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMe } from "../redux/actions/authActions";

function Protected({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token, user } = useSelector((state) => state.auth);
  const {data} = useSelector((state) => state.auth);
  console.log(data);
  console.log(user);

  useEffect(() => {
    if (!token) {
      return navigate("/Login");
    } 
    // else {
    //   //ambil state getMe dari redux
    //   //buat validator sudah verify atau belum dari getMe
    //   //jika sdh verify akan di navigate sesusai ke tempatnya
    //   //jika belum maka akan di return ke verifikasi
    // }

    dispatch(getMe(navigate, null, "/"));
  }, [navigate, dispatch, token]);

  return children;
}

export default Protected;
