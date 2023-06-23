import React from "react";
import Navbar from "../components/Navbar";
import { Button, Container, Row, Col } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCircleNotifications } from "react-icons/md";
import { BsDot } from "react-icons/bs";

function Notifikasi() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <h5>
            <strong>Notifikasi</strong>
          </h5>
        </Row>
        <Row className="d-flex justify-content-between gap-3">
          <Col>
            <Button style={{ background: "#A06ECE", border: "0" }}>
              <BsArrowLeft />
              &nbsp; Beranda
            </Button>
          </Col>
          <Col className="d-flex justify-content-end gap-3">
            <Button style={{ background: "#A06ECE", border: "0" }}>
              <LuFilter />
              &nbsp; Filter
            </Button>
            <Button className="bg-transparent border-0">
              <AiOutlineSearch color="#7126B5" size={25} />
            </Button>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="d-flex justify-content-between">
            <div className="d-flex ">
              <MdCircleNotifications
                size={25}
                color="#7126B580"
                className="mt-auto mb-auto"
              />
              <div>
                <span style={{ color: "#8A8A8A", fontSize: "14px" }}>
                  Promosi
                </span>
                <br />

                <span style={{ fontSize: "16px" }}>
                  Dapatkan Potongan 50% Tiket!
                </span>
                <br />
                <span style={{ color: "#8A8A8A", fontSize: "14px" }}>
                  Syarat dan Ketentuan berlaku!
                </span>
              </div>
            </div>
            <div>
              <span style={{ color: "#8A8A8A", fontSize: "14px" }}>
                14 Mei 2002
              </span>
              <BsDot size={30} color="#73CA5C" />
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="d-flex justify-content-between ">
            <div className="d-flex ">
              <MdCircleNotifications
                size={25}
                color="#7126B580"
                className="mt-auto mb-auto"
              />
              <div>
                <span style={{ color: "#8A8A8A", fontSize: "14px" }}>
                  Notifikasi
                </span>
                <br />

                <span style={{ fontSize: "16px" }}>
                  Terdapat perubahan pada jadwal penerbangan kode booking 45GT6.
                  Cek jadwal perjalanan Anda disini!
                </span>
                <br />
                <span style={{ color: "#8A8A8A", fontSize: "14px" }}>
                  Syarat dan Ketentuan berlaku!
                </span>
              </div>
            </div>

            <div>
              <span style={{ color: "#8A8A8A", fontSize: "14px" }}>
                14 Mei 2002
              </span>
              <BsDot size={30} color="#FA2C5A" />
            </div>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
}

export default Notifikasi;
