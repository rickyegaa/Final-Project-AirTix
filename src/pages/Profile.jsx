import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiArrowLeft, FiEdit3, FiLogOut, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Form,
} from "react-bootstrap";

const Profile = () => {
  const [dataUser, setDataUser] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${process.env.REACT_APP_API}/auth/whoami`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data.data.user;
        setDataUser(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProfile();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Row className="mt-5">
          <Col md={{ offset: 1 }}>
            <h4 className="fw-bold">Akun</h4>
          </Col>
        </Row>
        <Row>
          <Col
            className="mt-3 rounded"
            md={{ span: 10, offset: 1 }}
            style={{ backgroundColor: "#a06ece" }}
          >
            <Button
              className="p-3"
              style={{
                backgroundColor: "#a06ece",
                color: "#ffffff",
                border: "none",
              }}
            >
              <FiArrowLeft className="me-2" /> Beranda
            </Button>
          </Col>
        </Row>
      </Container>

      <div className="shadow-sm border-bottom pb-4" />

      <Container className="mt-5">
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <ListGroup variant="flush">
              <ListGroup.Item action className="pb-3">
                <Link
                  // to={"/"}
                  style={{
                    color: "#151515",
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                  <FiEdit3 className="me-3" style={{ color: "#7126b5" }} />
                  Ubah Profil
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action className="mt-4 pb-3">
                <Link
                  // to={""}
                  style={{
                    color: "#151515",
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                  <FiSettings className="me-3" style={{ color: "#7126b5" }} />
                  Pengaturan Akun
                </Link>
              </ListGroup.Item>
              <ListGroup.Item action className="mt-4 border-bottom pb-3">
                <Link
                  to={"/"}
                  style={{
                    color: "#151515",
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                  <FiLogOut className="me-3" style={{ color: "#7126b5" }} />
                  Keluar
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={{ span: 5, offset: 1 }}>
            <Card>
              <Card.Body className="p-4">
                <h5 className="fw-bold">Ubah Data Profil</h5>
                <Row>
                  <Col
                    className="rounded-top p-3 mt-1"
                    style={{ color: "#ffffff", backgroundColor: "#a06ece" }}
                  >
                    Data Diri
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label
                        className="ms-1"
                        style={{ fontWeight: "bold", color: "#7126b5" }}
                      >
                        Nama Lengkap
                      </Form.Label>
                      <Form.Control type="text" value={dataUser?.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label
                        className="ms-1"
                        style={{ fontWeight: "bold", color: "#7126b5" }}
                      >
                        Nomor Telepon
                      </Form.Label>
                      <Form.Control type="email" value={dataUser?.email} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label
                        className="ms-1"
                        style={{ fontWeight: "bold", color: "#7126b5" }}
                      >
                        Upload Foto
                      </Form.Label>
                      <Form.Group controlId="formFile">
                        <Form.Control type="file" />
                      </Form.Group>
                    </Form.Group>
                    <div className="text-center">
                      <Button
                        className="py-2 px-3 "
                        type="submit"
                        style={{
                          backgroundColor: "#7126b5",
                          color: "#ffffff",
                          border: "none",
                        }}
                      >
                        Simpan
                      </Button>
                    </div>
                  </Form>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
