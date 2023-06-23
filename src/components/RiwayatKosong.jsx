import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function RiwayatKosong() {
  //   const handleClick = () => {
  //   };
  return (
    <Container>
      <Row>
        <Col>
          <Image
            src={require("../assets/img/cart_shopping.svg").default}
            className="justify-items-center"
            alt="cart_shopping.svg"
            style={{
              width: "305px",
              height: "305px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            fluid
          />
          <p className="text-center" style={{ fontStyle: "" }}>
            <b>
              <span style={{ color: "#7126B5" }}>
                Oops! Riwayat pesanan kosong!
              </span>
              <br />
              Anda belum melakukan pemesanan penerbangan
            </b>
          </p>
          <div className="text-center">
            <Button
              style={{
                background: "#7126B5",
                border: "0px",
                width: "350px",
              }}
            >
              Cari Penerbangan
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RiwayatKosong;
