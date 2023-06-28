import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import "../assets/css/Login.css";
import { useNavigate } from "react-router-dom";

const EmailRequest = () => {
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      email: "lambadya421@gmail.com",
      //   Email,
    });

    try {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      const response = await axios.post(
        `https://airtix-develop.up.railway.app/auth/send-reset-password`,
        data,
        config
      );
      console.log(response.data.message);
      navigate("/ResetPassword");
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
                    value={Email}
                    style={{ borderRadius: "2px", height: "50px" }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <button
                onClick={handleSubmit}
                type="submit"
                className="login w-100"
              >
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
