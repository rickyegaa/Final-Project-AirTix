import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getTicketDetails } from "../redux/actions/postActions";
import RiwayatKosong from "../components/RiwayatKosong";
import RiwayatTersedia from "../components/RiwayatTersedia";
import { DatePicker } from "antd";
// import moment from "moment";

const { RangePicker } = DatePicker;

function Riwayat() {
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [dateFrom, setDateFrom] = useState([]);
  const [dateTo, setDateTo] = useState([]);

  // console.log(date);

  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);
  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getTicketDetails());
  }, [dispatch]);

  //   const handleClick = () => {
  //   };
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <h5>
            <strong>Riwayat Pemesanan</strong>
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
            <Button
              style={{ background: "#A06ECE", border: "0" }}
              onClick={handleShowFilter}
            >
              <LuFilter />
              &nbsp; Filter
            </Button>
            <Button
              className="bg-transparent border-0"
              onClick={handleShowSearch}
            >
              <AiOutlineSearch color="#7126B5" size={25} />
            </Button>
          </Col>
        </Row>
        {tickets ? <RiwayatTersedia /> : <RiwayatKosong />}
      </Container>
      <Modal show={showFilter} onHide={handleCloseFilter} centered>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Pilih Tanggal: &nbsp;</Form.Label>
              <RangePicker
                onChange={(tanggal) => {
                  // console.log(tanggal[0]);
                  // console.log(tanggal[1]);
                  setDateFrom(tanggal[0]);
                  setDateTo(tanggal[1]);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseFilter}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showSearch} onHide={handleCloseSearch} centered>
        <Modal.Header closeButton>
          <Modal.Title>Search Book Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Booking Code</Form.Label>
              <Form.Control
                type="input"
                placeholder="Masukan Nomor Penerbangan"
                // autoFocus
                // readOnly
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseSearch}>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Riwayat;
