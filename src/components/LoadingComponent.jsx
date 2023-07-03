import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function LoadingComponent() {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            src={require("../assets/img/loading_component.svg").default}
            className="justify-items-center"
            alt="loading_component.svg"
            style={{
              width: "305px",
              height: "305px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
}

export default LoadingComponent;
