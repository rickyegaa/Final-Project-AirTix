import React from "react";
import BookingForm from "../components/Form/BookingForm";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/Banner.css";

function Banner() {
  return (
    <Container>
      <Row>
        <Col>
          <div
            className="cont"
            style={{
              backgroundImage:
                " linear-gradient(to right,rgba(113, 38, 181, 1), rgba(159,102,210,1), rgba(182,156,205,1)",
              zIndex: -1,
              height: 150,
              marginBottom: -250,
              marginTop: 80,
            }}
          ></div>
        </Col>
      </Row>
      <Container>
        <Row className="d-flex ">
          <Col>
            <div className="banner w-200 mt-5">
              <img
                src={require("../assets/img/brn.svg").default}
                alt="banner"
                style={{
                  width: "100%",
                  height: 225,
                  borderRadius: 20,
                }}
              />
            </div>
          </Col>
        </Row>
        <Container
          className="border-0 bg-white"
          style={{
            boxShadow: "0 0px 10px 0 rgba(0, 0, 0,  0.15)",
            borderRadius: 12,
            fontFamily: "Poppins",
            width: "100%",
            maxWidth: "978px",
          }}
        >
          <Card.Body style={{ width: "100%" }}>
            <Card.Text>
              <BookingForm />
            </Card.Text>
          </Card.Body>
        </Container>
      </Container>
    </Container>
  );
}

export default Banner;
