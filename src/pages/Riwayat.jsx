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
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import moment from "moment";

const { RangePicker } = DatePicker;

function Riwayat() {
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [dateFrom, setDateFrom] = useState([]);
  const [dateTo, setDateTo] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function getTicketDetails() {
      try {
        const response = await axios.get(
          `https://648313a9f2e76ae1b95be96f.mockapi.io/tiket`
        );
        setTickets(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    }
    getTicketDetails();
  }, []);
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);
  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);

  const rawDate = dateFrom;
  const formattedDate = formatDate(rawDate);

  console.log(formattedDate);

  function formatDate(date) {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formatted = new Intl.DateTimeFormat("en", options).format(date);
    return formatted;
  }
  const handleStartDateChange = (event) => {
    const value = event.target.value;
    setStartDate(value);
    filterData(value, endDate);
  };

  const handleEndDateChange = (event) => {
    const value = event.target.value;
    setEndDate(value);
    filterData(startDate, value);
  };

  const filterData = (start, end) => {
    const filteredItems = tickets.filter((item) => {
      const itemDate = new Date(item.flightDate_dep);
      const startFilter = new Date(start);
      const endFilter = new Date(end);
      return itemDate >= startFilter && itemDate <= endFilter;
    });
    setFilteredData(filteredItems);
  };
  const filteredCards = tickets.filter((card) =>
    card.booking_code.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <Button
              style={{ background: "#A06ECE", border: "0" }}
              as={Link}
              to="/"
            >
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
        {tickets ? (
          <RiwayatTersedia
            filteredCards={filteredCards}
            filteredData={filteredData}
          />
        ) : (
          <RiwayatKosong />
        )}
      </Container>
      <Modal show={showFilter} onHide={handleCloseFilter} centered>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Pilih Tanggal: &nbsp;</Form.Label>
              <RangePicker
                onChange={(tanggal) => {
                  console.log(tanggal[0].$d);
                  console.log(tanggal[1].$d);
                  setDateFrom(tanggal[0].$d);
                  setDateTo(tanggal[1].$d);
                }}
              /> */}
              <label>Start Date:</label>
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
              />

              <label>End Date:</label>
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
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
                type="text"
                placeholder="Masukan Nomor Penerbangan"
                // autoFocus
                // readOnly
                value={searchTerm}
                onChange={handleSearch}
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
