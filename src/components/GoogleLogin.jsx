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
    <Button variant="outline-primary" onClick={() => loginWithGoogle()}>
      <img
        alt=""
        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
        width="20"
        style={{ marginRight: 8 + "px", marginBottom: 4 + "px" }}
      />
      {log}
    </Button>
  );
}

export default GoogleLogin;
