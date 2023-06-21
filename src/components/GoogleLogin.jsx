import React from "react";
import { Button } from "react-bootstrap";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerLoginWithGoogle } from "../redux/actions/authActions";

function GoogleLogin({ log }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      dispatch(registerLoginWithGoogle(responseGoogle.access_token, navigate)),
  });
  return (
    <Button variant="primary" onClick={() => loginWithGoogle()}>
      {log} with Google 🚀
    </Button>
  );
}

export default GoogleLogin;
