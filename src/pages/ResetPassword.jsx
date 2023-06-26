import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import "../assets/css/Login.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        toast.warning("Password and Confirm Password Dont Match");
        return;
      }

      // Mengambil token dari local storage
      const token = localStorage.getItem("token");

      // Mengatur headers untuk mengirim token dan mengatur content type
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      // Mengirim data password baru ke API
      const data = {
        password,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_API}/auth/reset-password`,
        data,
        config
      );

      toast.success(response.data.message);
    } catch (error) {
      if (error.response) {
        // Cek Jika terjadi error dari API
        const { data } = error.response;
        toast.error(data.message);
      } else {
        // Cek Jika terjadi error selain dari API
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="bg-color d-flex justify-content-center align-items-center">
          <img
            src={require("../assets/img/AirTix.svg").default}
            fluid
            style={{
              top: "200px",
              left: "85px",
              width: "300px",
              height: "200px",
            }}
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center bg-body">
          <div className="w-75">
            <h3 className="title-login">Reset Password</h3>
            <Form className=" mt-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Masukkan Password Baru</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Masukkan Password"
                    style={{ borderRadius: "2px", height: "50px" }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroup.Text onClick={toggleNewPasswordVisibility}>
                    {showNewPassword ? (
                      <BsFillEyeSlashFill />
                    ) : (
                      <BsFillEyeFill />
                    )}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div class="d-flex justify-content-between">
                  <Form.Label>Ulangi Password Baru</Form.Label>
                </div>
                <InputGroup className="mb-3">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan Password"
                    style={{ borderRadius: "2px", height: "50px" }}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <InputGroup.Text onClick={togglePasswordVisibility}>
                    {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <button type="submit" className="login w-100">
                Simpan
              </button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
