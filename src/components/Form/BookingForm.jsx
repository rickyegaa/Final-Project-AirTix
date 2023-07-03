import React, { useState } from "react";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
import "../../assets/css/Banner.css";
import dateVector from "../../assets/img/dateVector.png";
import passangerVector from "../../assets/img/passangerVector.png";
import planeVector from "../../assets/img/planeVector.png";
import ModalFrom from "./Modalfrom";
import ModalTo from "./ModalTo";
import ModalPassanger from "./ModalPassanger";
import ModalSeatClass from "./ModalSeatClass";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const [dataFrom, setDataFrom] = useState("");
  const [dataTo, setDataTo] = useState("");
  const [departureDate, setDeparatureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [selectedPassengers, setSelectedPassengers] = useState();
  const [dataClass, setDataClass] = useState("");
  const navigate = useNavigate();

  const buttonClick = (event) => {
    event.preventDefault();
    const searchData = {
      dataFrom,
      dataTo,
      departureDate,
      returnDate,
      selectedPassengers,
      dataClass,
    };
    navigate(`/search?dep_airport=${dataFrom.value}&arr_airport=${dataTo.value}&departure_time=${departureDate}&personr=${totalPassenger(selectedPassengers)}&seatclass=${dataClass.value}`);
  };

  const totalPassenger = (passenger) => {
    return Object.values(passenger).reduce((acc, obj) => acc + obj, 0);
  };

  const [inputValue, setInputValue] = useState();

  const inputHandleChange = (event) => {
    setInputValue(event.target.value);
    props.setDataFrom(event.target.value);
    props.setDataTo(event.target.value);
    props.handlePassangerChange(event.target.value);
    props.setDataClass(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.dataSelect(inputValue);
  };

  const handleDataSelect = (passengers) => {
    setSelectedPassengers(passengers);
  };

  console.log("data");
  return (
    <Container className="mt-4 mb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={11}>
          <Card bg="light" border="light" className="card-size">
            <h3 className="fw-bold m-4">
              Pilih Jadwal Penerbangan spesial di <span className="text-color">AirTix</span>
            </h3>
            <Card.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <img src={planeVector} alt="plane" className="font-button" />
                      <Form.Label>From</Form.Label>
                      <ModalFrom 
                      setDataFrom={setDataFrom}
                      onChange={inputHandleChange} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <img src={planeVector} alt="plane" className="font-button" />
                      <Form.Label>To</Form.Label>
                      <ModalTo setDataTo={setDataTo} 
                      onChange={inputHandleChange} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <Form.Group onSubmit={handleClick} className="mb-3">
                      <img src={dateVector} alt="date" className="font-button font-size" />
                      <Form.Label>Departure Date</Form.Label>
                      <Form.Control type="date" 
                      value={departureDate} 
                      onChange={(e) => setDeparatureDate(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group 
                    onSubmit={handleClick} 
                    className="mb-3">
                      <img src={dateVector} alt="date" className="font-button font-size" />
                      <Form.Label>Return Date</Form.Label>
                      <Form.Control 
                      type="date" 
                      value={returnDate} 
                      onChange={(e) => setReturnDate(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <img src={passangerVector} alt="passanger" className="font-button" />
                      <Form.Label>Passengers</Form.Label>
                      <ModalPassanger 
                      setSelectedPassengers={handleDataSelect} 
                      dataSelect={handleDataSelect} 
                      onChange={inputHandleChange} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <img src={passangerVector} alt="passanger" className="font-button" />
                      <Form.Label>Seat Class</Form.Label>
                      <ModalSeatClass 
                      setDataClass={setDataClass} 
                      onChange={inputHandleChange} />
                    </Form.Group>
                  </Col>
                </Row>
                <Col className="p-2 text-center">
                  <Button type="button" className="custom-button mt-4 text-light w-100" onClick={buttonClick}>
                    Cari Penerbangan
                  </Button>
                </Col>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingForm;
