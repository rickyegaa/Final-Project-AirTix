import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import "../assets/css/Login.css";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EmailRequest = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const data = {
        email: email,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_API}/auth/send-reset-password`,
        data,
        config
      );

      // Simpan token ke local storage
      localStorage.setItem("token", response.data.token);

      // Tampilkan pesan sukses jika berhasil
      toast.success("Email reset password telah dikirim!");
      navigate("/ResetPassword");
    } catch (error) {
      // Cek Jika terjadi error dari API
      toast.error("Gagal mengirim email reset password.");
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
            alt="img"
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center bg-body">
          <div className="w-75">
            <h3 className="title-login">Email</h3>
            <Form className=" mt-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Masukkan Email</Form.Label>
                <InputGroup className="mb-3 w-100">
                  <Form.Control
                    type={"email"}
                    placeholder="Masukkan Email Anda"
                    value={email}
                    style={{ borderRadius: "2px", height: "50px" }}
                    onChange={handleEmailChange}
                  />
                </InputGroup>
              </Form.Group>

              <button type="submit" className="login w-100">
                Kirim
              </button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EmailRequest;
