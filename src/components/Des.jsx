import React, { useEffect, useState } from "react";
import { Container, Card, Button, Col, Row } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";
// import { getMockApi } from "../redux/actions/postActions";
import "../assets/css/Des.css";
import axios from "axios";
import { toast } from "react-toastify";

const DestinationCard = () => {
  const [mock, setMock] = useState([]);
  const [filteredData, setFilteredData] = useState("Semua");
  const [activeButton, setActiveButton] = useState("Semua");

  const getButtonStyle = (button) => {
    return {
      backgroundColor: activeButton === button ? "#7126B5" : "#E2D4F0",
      color: activeButton === button ? "white" : "#3C3C3C",
    };
  };

  // const dispatch = useDispatch();
  // const { mock } = useSelector((state) => state.post);

  // useEffect(() => {
  //   dispatch(getMockApi());
  // }, [dispatch]);

  useEffect(() => {
    async function getAPI() {
      try {
        const response = await axios.get(
          `https://648313a9f2e76ae1b95be96f.mockapi.io/airport`
        );
        setMock(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    }
    getAPI();
  }, []);
  const dayFormatter = new Intl.DateTimeFormat("id-id", { dateStyle: "long" });

  const handleFilter = (airportType) => {
    setFilteredData(airportType);
    setActiveButton(airportType);
  };

  const renderDataMap = () => {
    if (filteredData === "Semua") {
      return mock.map((bandara) => {
        return (
          <Col className="d-flex justify-content-center mt-3">
            <Card key={bandara.id} style={{ width: "14rem" }}>
              <Card.Img variant="top" src={`${bandara?.photo}`} />
              <Card.Body>
                <Card.Text>
                  <b>{bandara?.dep_airport}</b> -&gt;
                  <b>{bandara?.arr_airport}</b>
                </Card.Text>

                <Card.Text style={{ color: "#7126B5", fontSize: "12px" }}>
                  <b>{bandara?.airport_type}</b>
                </Card.Text>

                <Card.Text style={{ fontSize: "12px" }}>
                  {dayFormatter.format(new Date(bandara?.departure_date))} -&gt;{" "}
                  {dayFormatter.format(new Date(bandara?.arrival_date))}
                </Card.Text>

                <Card.Text>
                  Mulai Dari&nbsp;
                  <b>
                    <span style={{ color: "#FF0000" }}>
                      IDR&nbsp;{bandara?.ticket_price}
                    </span>
                  </b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      });
    } else {
      const data = mock.filter((item) => item.airport_type === filteredData);
      return data.map((bandara) => {
        return (
          <Col className="d-flex justify-content-center mt-3">
            <Card key={bandara.id} style={{ width: "14rem" }}>
              <Card.Img variant="top" src={`${bandara?.photo}`} />
              <Card.Body>
                <Card.Text>
                  <b>{bandara?.dep_airport}</b> -&gt;
                  <b>{bandara?.arr_airport}</b>
                </Card.Text>

                <Card.Text style={{ color: "#7126B5", fontSize: "12px" }}>
                  <b>{bandara?.airport_type}</b>
                </Card.Text>

                <Card.Text style={{ fontSize: "12px" }}>
                  {dayFormatter.format(new Date(bandara?.departure_date))} -&gt;{" "}
                  {dayFormatter.format(new Date(bandara?.arrival_date))}
                </Card.Text>

                <Card.Text>
                  Mulai Dari&nbsp;
                  <b>
                    <span style={{ color: "#FF0000" }}>
                      IDR&nbsp;{bandara?.ticket_price}
                    </span>
                  </b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      });
    }
  };
  return (
    <Container>
      <Row className="d-grid">
        <Col className="region-buttons mt-3 ">
          <Button
            className="ms-2 me-2 mt-2"
            style={getButtonStyle("Semua")}
            onClick={() => handleFilter("Semua")}
          >
            <FiSearch className="button-icon" />
            Semua
          </Button>
          <Button
            className="ms-2 me-2 mt-2"
            style={getButtonStyle("Brown bear")}
            onClick={() => handleFilter("Brown bear")}
          >
            <FiSearch className="button-icon" />
            Asia
          </Button>
          <Button
            className="ms-2 me-2 mt-2"
            style={getButtonStyle("Sun bear")}
            onClick={() => handleFilter("Sun bear")}
          >
            <FiSearch className="button-icon" />
            Amerika
          </Button>
          <Button
            className="ms-2 me-2 mt-2"
            style={getButtonStyle("Sloth bear")}
            onClick={() => handleFilter("Sloth bear")}
          >
            <FiSearch className="button-icon" />
            Australia
          </Button>
          <Button
            className="ms-2 me-2 mt-2"
            style={getButtonStyle("Giant panda")}
            onClick={() => handleFilter("Giant panda")}
          >
            <FiSearch className="button-icon" />
            Eropa
          </Button>
          <Button
            className="ms-2 me-2 mt-2"
            style={getButtonStyle("Polar bear")}
            onClick={() => handleFilter("Polar bear")}
          >
            <FiSearch className="button-icon" />
            Afrika
          </Button>
        </Col>
      </Row>
      <Row>{renderDataMap()}</Row>
    </Container>
  );
};

export default DestinationCard;
