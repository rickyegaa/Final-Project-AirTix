import React from "react";
import Bandara from "../components/InputBandara";

import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/Banner.css";
import DateAndClass from "../components/DateAndClass";

function Banner() {
  return (
    <div>
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
      <Container>
        <Row className="d-flex ">
          <Col>
            <div className="banner w-200 mt-5">
              <img
                src={require("../assets/img/brn.svg").default}
                alt="banner"
                style={{
                  width: "100%",
                  height: 255,
                  borderRadius: 20,
                  backgroundImage:
                    " linear-gradient(to right,rgba(255, 233, 202, 1), rgba(255,0,0,0))",
                }}
              />
            </div>
          </Col>
        </Row>
        <Container
          className="border-0 bg-white"
          style={{
            boxShadow: "0 0px 10px 0 rgba(0, 0, 0,  0.15)",
            width: 978,
            marginTop: 35,
            borderRadius: 12,
            paddingTop: 35,
            paddingRight: 35,
            paddingLeft: 35,
            fontFamily: "Poppins",
          }}
        >
          <Card.Header className="border-0 mb-3">
            <h6>
              <b>
                Pilih Jadwal Penerbangan spesial di
                <span style={{ color: "#7126B5" }}> AirTix!</span>
              </b>
            </h6>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Bandara />
              {/* ////////////////////////////////////////////////////////// */}
              <DateAndClass />
            </Card.Text>
          </Card.Body>
        </Container>
      </Container>
    </div>
  );
}

export default Banner;
