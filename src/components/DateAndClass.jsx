import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";
import "../assets/css/Banner.css";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { DatePicker } from "antd";

function DateAndClass() {
  const [showPassenger, setShowPassenger] = useState(false);
  const [showSeatClass, setShowSeatClass] = useState(false);
  const [valueDewasa, setValueDewasa] = useState("");
  const [valueAnak, setValueAnak] = useState("");
  const [valueBayi, setValueBayi] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [sum, setSum] = useState(0);
  const [selectedOptionSeat, setSelectedOptionSeat] = useState(null);
  const [dateFrom, setDateFrom] = useState([]);
  const [dateTo, setDateTo] = useState([]);

  const handleOptionClickSeat = (option) => {
    setSelectedOptionSeat(option);
  };

  const handleShowSeatClass = () => {
    setShowSeatClass(true);
  };
  const handleCloseSeatClass = () => {
    setShowSeatClass(false);
  };
  const handleShowPassenger = () => {
    setShowPassenger(true);
  };
  const handleClosePassenger = () => {
    setShowPassenger(false);
  };
  // const [selectedDate, setSelectedDate] = useState("");

  // const handleDateChange = (event) => {
  //   const { value } = event.target;
  //   setSelectedDate(value);
  // };

  const handleSumClick = () => {
    const num1 = +valueDewasa;
    const num2 = +valueAnak;
    const num3 = +valueBayi;

    const result = num1 + num2 + num3;

    setSum(result.toString());
  };

  const handleSwitchChange = () => {
    setIsEnabled(!isEnabled);
  };
  const handleChangeValueDewasa = (event) => {
    setValueDewasa(event.target.value);
  };
  const handleChangeValueAnak = (event) => {
    setValueAnak(event.target.value);
  };
  const handleChangeValueBayi = (event) => {
    setValueBayi(event.target.value);
  };

  const handleSaveChanges = () => {
    handleClosePassenger();
    handleSumClick();
  };
  return (
    <>
      <Form className="inputSchedule gap-3 align-items-center justify-content-between  ">
        <Form.Group
          className="gap-2 mb-3 d-flex align-items-center justify-content-between"
          controlId="formBasicEmail"
        >
          <Form.Group>
            <MdOutlineDateRange size={25} />
            <Form.Label>Date</Form.Label>
          </Form.Group>

          <Form.Group
            className="d-grid"
            style={{ width: "100%", maxWidth: "400px" }}
          >
            <Form.Label>Departure</Form.Label>

            <DatePicker
              style={{ width: "100%" }}
              onChange={(tanggal) => {
                // console.log(tanggal[0]);
                // console.log(tanggal[1]);
                setDateFrom(tanggal[0]);
                setDateTo(tanggal[1]);
              }}
            />
            {/* <p>Selected Date: {selectedDate}</p> */}
          </Form.Group>

          <Form.Group
            className="d-grid"
            style={{ width: "100%", maxWidth: "4000px" }}
          >
            <Form.Label>Return</Form.Label>
            <DatePicker
              style={{ width: "100%" }}
              onChange={(tanggal) => {
                // console.log(tanggal[0]);
                // console.log(tanggal[1]);
                setDateFrom(tanggal[0]);
                setDateTo(tanggal[1]);
              }}
              disabled={!isEnabled}
              placeholder={isEnabled ? "Select Date" : "Input disabled"}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="switch"
              label=""
              checked={isEnabled}
              onChange={handleSwitchChange}
            />
          </Form.Group>
        </Form.Group>

        <Form.Group
          className="gap-3 mb-3 d-flex align-items-center justify-content-between"
          controlId="formBasicEmail"
        >
          <Form.Group>
            <MdOutlineAirlineSeatReclineNormal size={25} />
            <Form.Label>To</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>Passengers</Form.Label>

            <Form.Control
              type="text"
              placeholder={`${sum} Passengers `}
              onClick={handleShowPassenger}
              readOnly="readonly"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Seat Class</Form.Label>
            <Form.Control
              type="text"
              placeholder={
                selectedOptionSeat ? selectedOptionSeat : "Seat Class"
              }
              onClick={handleShowSeatClass}
              readOnly="readonly"
            />
          </Form.Group>
        </Form.Group>
      </Form>
      <Modal show={showPassenger} onHide={handleClosePassenger} centered>
        <Modal.Header closeButton>
          <Modal.Title>Passengers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Group>
                <Form.Group className="d-grid">
                  <Form.Label>Dewasa</Form.Label>
                  <Form.Text>(12Tahun Ke Atas)</Form.Text>
                </Form.Group>
              </Form.Group>
              <Form.Group>
                <Form.Group className="d-flex">
                  <Form.Control
                    type="number"
                    placeholder="0"
                    autoFocus
                    value={valueDewasa}
                    onChange={handleChangeValueDewasa}
                    min="0"
                  />
                </Form.Group>
              </Form.Group>
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Group>
                <Form.Group className="d-grid">
                  <Form.Label>Anak</Form.Label>
                  <Form.Text>(2 - 11 Tahun)</Form.Text>
                </Form.Group>
              </Form.Group>
              <Form.Group>
                <Form.Group className="d-flex">
                  <Form.Control
                    type="number"
                    placeholder="0"
                    autoFocus
                    value={valueAnak}
                    onChange={handleChangeValueAnak}
                    min="0"
                  />
                </Form.Group>
              </Form.Group>
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Group className="d-grid">
                <Form.Label>Bayi</Form.Label>
                <Form.Text>(Di Bawah 2 Tahun)</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Group className="d-flex">
                  <Form.Control
                    type="number"
                    placeholder="0"
                    autoFocus
                    value={valueBayi}
                    onChange={handleChangeValueBayi}
                    min="0"
                  />
                </Form.Group>
              </Form.Group>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showSeatClass} onHide={handleCloseSeatClass} centered>
        <Modal.Header closeButton>
          <Modal.Title>Passengers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {["radio"].map((type) => (
              <div key={`reverse-${type}`} className="mb-3 d-grid ">
                <Form.Group
                  className="d-flex justify-content-between"
                  onClick={() => handleOptionClickSeat("Economy")}
                >
                  <Form.Group className="d-grid">
                    <Form.Label>Economy</Form.Label>
                    <Form.Text>IDR 4.950.000</Form.Text>
                  </Form.Group>
                  <Form.Check
                    className="d-flex align-items-center"
                    reverse
                    label=""
                    name="group1"
                    type={type}
                    id={`reverse-${type}-1`}
                  />
                </Form.Group>
                <Form.Group
                  className="d-flex justify-content-between"
                  onClick={() => handleOptionClickSeat("Premium Economy")}
                >
                  <Form.Group className="d-grid">
                    <Form.Label>Premium Economy</Form.Label>
                    <Form.Text>IDR 7.550.000</Form.Text>
                  </Form.Group>
                  <Form.Check
                    className="d-flex align-items-center"
                    reverse
                    label=""
                    name="group1"
                    type={type}
                    id={`reverse-${type}-2`}
                  />
                </Form.Group>
                <Form.Group
                  className="d-flex justify-content-between"
                  onClick={() => handleOptionClickSeat("Business")}
                >
                  <Form.Group className="d-grid">
                    <Form.Label>Business</Form.Label>
                    <Form.Text>IDR 29.220.000</Form.Text>
                  </Form.Group>
                  <Form.Check
                    className="d-flex align-items-center"
                    reverse
                    label=""
                    name="group1"
                    type={type}
                    id={`reverse-${type}-3`}
                  />
                </Form.Group>
                <Form.Group
                  className="d-flex justify-content-between"
                  onClick={() => handleOptionClickSeat("First Class")}
                >
                  <Form.Group className="d-grid">
                    <Form.Label>First Class</Form.Label>
                    <Form.Text>IDR 87.620.000</Form.Text>
                  </Form.Group>
                  <Form.Check
                    className="d-flex align-items-center"
                    reverse
                    label=""
                    name="group1"
                    type={type}
                    id={`reverse-${type}-4`}
                  />
                </Form.Group>
              </div>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseSeatClass}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Button
        style={{
          background: "#7126B5",
          border: "0",
          width: "100%",
          paddingRight: -35,
          marginTop: 35,
        }}
        type="submit"
        size="md"
        as={Link}
        to="/CariPenerbangan"
      >
        Cari Penerbangan
      </Button>
    </>
  );
}

export default DateAndClass;
