import React, { useState } from "react";
import { Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/actions/authActions";
import GoogleLogin from "../components/GoogleLogin";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import "../assets/css/Register.css";
// import axios from "axios";
// import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      name,
      email,
      phone,
      password,
    });
    // try {
    //   let config = {
    //     method: "post",
    //     maxBodyLength: Infinity,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     data: data,
    //   };
    //   const response = await axios.post(
    //     `${process.env.REACT_APP_API}/auth/resend-otp`,
    //     data,
    //     config
    //   );
    //   console.log(response.data.message);
    // } catch (error) {
    //   if (error.response) {
    //     // Cek Jika terjadi error dari API
    //     const { data } = error.response;
    //     toast.error(data.message);
    //   } else {
    //     // Cek Jika terjadi error selain dari API
    //     toast.error("Something went wrong");
    //   }
    // }
    dispatch(register(data, navigate));
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100" onSubmit={onSubmit}>
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
            <br />
            <h3 className="title-register">Register</h3>
            <Form className="mt-4">
              <Form.Group className="mb-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Lengkap"
                  style={{ borderRadius: "5px", height: "50px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Example: react@gmail.com"
                  style={{ borderRadius: "5px", height: "50px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nomor Telepon</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="+628"
                  style={{ borderRadius: "5px", height: "50px" }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>Buat Password</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Buat Password"
                    style={{ borderRadius: "5px", height: "50px" }}
                  />
                  <InputGroup.Text onClick={togglePasswordVisibility}>
                    {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <button type="submit" className="register w-100">
                Register
              </button>
              <div className="d-flex justify-content-center mt-3">
                <Form.Text>
                  Sudah Punya Akun ?
                  <Link to="/Login" className="ms-2 text-color text">
                    Masuk di Sini
                  </Link>
                </Form.Text>
              </div>
              <div className="text-center my-3">
                <GoogleLogin log={`Register With Google`} />
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
