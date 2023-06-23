import React, { useState } from "react";
import { Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import "../assets/css/Login.css";

const ResetPassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            <Form className=" mt-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Masukkan Password Baru</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Masukkan Password"
                    style={{ borderRadius: "2px", height: "50px" }}
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
