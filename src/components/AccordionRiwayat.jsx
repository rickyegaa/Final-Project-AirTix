import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Container, ListGroup } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { toast } from "react-toastify";

function AccordionRiwayat() {
  const [tickets, setTickets] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
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
  const dayFormatter = new Intl.DateTimeFormat("id-id", { dateStyle: "long" });
  const timeFormatter = new Intl.DateTimeFormat("id-id", {
    timeStyle: "short",
  });
  const totalAdult = (A, B) => {
    const currency = A * B;
    return currency.toLocaleString("id-id", {
      style: "currency",
      currency: "IDR",
    });
  };

  const currencyFormatter = (currency) => {
    return currency.toLocaleString("id-id", {
      style: "currency",
      currency: "IDR",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container
      style={{
        height: "689px",
        // width: "400px",
        overflowY: "scroll",
      }}
    >
      <Accordion className="my-3">
        {tickets &&
          tickets?.length > 0 &&
          tickets.map((bandara) => (
            <Accordion.Item
              eventKey={`${bandara.id}`}
              style={{ width: "100%", maxWidth: "800px" }}
              className="mx-auto"
            >
              <Accordion.Header>
                <Card
                  onClick={() => handleOptionClick(bandara)}
                  className={`mb-3 mt-3 option ${
                    selectedOption === bandara.id ? "on" : ""
                  }`}
                  key={bandara.id}
                  style={{
                    width: "100%",
                    border:
                      selectedOption === bandara.id
                        ? "1px solid #7126B5BF"
                        : "none",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <Card.Header className="bg-transparent ">
                    {bandara.ticket_status === true ? (
                      <span
                        style={{
                          background: "#73CA5C",
                          color: "white",
                          padding: "5px 15px 5px 15px",
                          borderRadius: "15px",
                          width: "10px",
                        }}
                      >
                        Issued
                      </span>
                    ) : (
                      <span
                        style={{
                          background: "#FF0000",
                          color: "white",
                          padding: "5px 15px 5px 15px",
                          borderRadius: "15px",
                          width: "10px",
                        }}
                      >
                        Unpaid
                      </span>
                    )}
                  </Card.Header>

                  <Card.Body
                    className={`${
                      isMobile ? "d-grid" : "d-flex"
                    } justify-content-between`}
                  >
                    <div className="d-flex align-items-center">
                      <MdLocationPin size={25} />
                      <Card.Text>
                        <b>{bandara.dep_airport}</b> <br />
                        {dayFormatter.format(new Date(bandara.flightDate_dep))}
                        <br />
                        {timeFormatter.format(new Date(bandara.flightDate_dep))}
                      </Card.Text>
                    </div>
                    <div className="d-grid justify-items-center">
                      <Card.Text>4h 0m</Card.Text>
                      <BsArrowRight size={25} />
                    </div>
                    <div className={`d-flex align-items-center`}>
                      <MdLocationPin size={25} />
                      <Card.Text>
                        <b> {bandara.arr_airport}</b> <br />
                        {dayFormatter.format(new Date(bandara.flightDate_arr))}
                        <br />
                        {timeFormatter.format(new Date(bandara.flightDate_arr))}
                      </Card.Text>
                    </div>
                  </Card.Body>

                  <Card.Body
                    className={`${
                      isMobile ? "d-grid" : "d-flex"
                    } justify-content-between`}
                  >
                    <div>
                      <Card.Text>
                        <strong>
                          Booking Code: <br />
                        </strong>
                        {bandara.booking_code}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text>
                        <strong>
                          Class: <br />
                        </strong>
                        {bandara.flight_class}
                      </Card.Text>
                    </div>
                    <div className="d-flex align-items-center">
                      <Card.Text>
                        <span style={{ color: "#4B1979" }}>
                          <strong>
                            {currencyFormatter(
                              bandara.adult * +bandara.flight_price +
                                +bandara.tax
                            )}
                          </strong>
                        </span>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Accordion.Header>
              <Accordion.Body>
                <Card
                  border="transparent"
                  style={{
                    width: "100%",
                    borderRight: "0px",
                    borderLeft: "0px",
                    borderTop: "0px",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                  }}
                >
                  <Card.Header className="bg-transparent d-flex justify-content-between align-items-center">
                    <h5 className="mt-3">
                      <strong>Detail Pesanan</strong>
                    </h5>

                    <div>
                      {bandara.ticket_status === true ? (
                        <span
                          style={{
                            background: "#73CA5C",
                            color: "white",
                            padding: "5px 15px 5px 15px",
                            borderRadius: "15px",
                            width: "10px",
                          }}
                        >
                          Issued
                        </span>
                      ) : (
                        <span
                          style={{
                            background: "#FF0000",
                            color: "white",
                            padding: "5px 15px 5px 15px",
                            borderRadius: "15px",
                            width: "10px",
                          }}
                        >
                          Unpaid
                        </span>
                      )}
                    </div>
                  </Card.Header>

                  <ListGroup
                    className="d-grid border-1 "
                    style={{
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                    }}
                  >
                    <div>
                      <Card.Text>
                        Booking Code:&nbsp;
                        <span style={{ color: "#7126B5" }}>
                          <strong>{bandara.booking_code}</strong>
                        </span>
                      </Card.Text>
                    </div>
                    <div className="d-flex justify-content-between">
                      <Card.Text>
                        <strong>
                          {timeFormatter.format(
                            new Date(bandara.flightDate_dep)
                          )}
                        </strong>
                      </Card.Text>
                      <Card.Text>
                        <span style={{ color: "#A06ECE" }}>
                          <strong>Keberangkatan</strong>
                        </span>
                      </Card.Text>
                    </div>
                    <div className="d-grid ">
                      <Card.Text>
                        {dayFormatter.format(new Date(bandara.flightDate_dep))}
                        <br />
                        <span style={{ color: "#4B1979" }}>
                          <b> {bandara.dep_airport}</b> - Terminal 1A Domestik
                        </span>
                      </Card.Text>
                    </div>
                  </ListGroup>
                  <ListGroup
                    style={{
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                    }}
                  >
                    <Card.Text>
                      <strong>
                        Jet Air - Economy <br />
                      </strong>
                      <strong>
                        JT - 203 <br />
                        <br />
                      </strong>
                      <strong>
                        Informasi: <br />
                      </strong>
                      <span style={{ color: "#4B1979" }}>
                        Penumpang 1: Mr. {bandara.passenger_name} <br />
                      </span>
                      ID: 1234567 <br />
                      <span style={{ color: "#4B1979" }}>
                        Penumpang 2: Miss {bandara.passenger_name} <br />
                      </span>
                      ID: 789658 <br />
                    </Card.Text>
                  </ListGroup>
                  <ListGroup
                    style={{
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <Card.Text>
                        <strong>
                          {timeFormatter.format(
                            new Date(bandara.flightDate_arr)
                          )}
                        </strong>
                      </Card.Text>
                      <Card.Text>
                        <span style={{ color: "#A06ECE" }}>
                          <strong>Kedatangan</strong>
                        </span>
                      </Card.Text>
                    </div>
                    <Card.Text>
                      {dayFormatter.format(new Date(bandara.flightDate_arr))}{" "}
                      <br />
                      <span style={{ color: "#4B1979" }}>
                        <b> {bandara.arr_airport}</b> Airport
                      </span>
                    </Card.Text>
                    <div className="d-grid "></div>
                  </ListGroup>
                  <ListGroup
                    style={{
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                    }}
                  >
                    <Card.Text>
                      <strong>Rincian Harga</strong>
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Card.Text>{bandara.adult} Adults</Card.Text>
                      <Card.Text>
                        <span style={{ color: "#A06ECE" }}>
                          <strong>
                            {totalAdult(bandara.adult, +bandara.flight_price)}
                          </strong>
                        </span>
                      </Card.Text>
                    </div>
                    <div className="d-flex justify-content-between">
                      <Card.Text>1 Baby</Card.Text>
                      <Card.Text>
                        <span style={{ color: "#A06ECE" }}>
                          <strong>Rp 0</strong>
                        </span>
                      </Card.Text>
                    </div>
                    <div className="d-flex justify-content-between">
                      <Card.Text>Tax</Card.Text>
                      <Card.Text>
                        <span style={{ color: "#A06ECE" }}>
                          <strong>{currencyFormatter(bandara.tax)}</strong>
                        </span>
                      </Card.Text>
                    </div>
                  </ListGroup>
                  <ListGroup
                    style={{
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                      border: "0",
                      borderBottom: "0",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <Card.Text>Total</Card.Text>
                      <Card.Text>
                        <span style={{ color: "#A06ECE" }}>
                          <strong>
                            {currencyFormatter(
                              bandara.adult * +bandara.flight_price +
                                +bandara.tax
                            )}
                          </strong>
                        </span>
                      </Card.Text>
                    </div>
                  </ListGroup>
                  {bandara.ticket_status === true ? (
                    <Button
                      style={{
                        background: "#7126B5",
                        color: "white",
                        borderTopRightRadius: "0",
                        borderTopLeftRadius: "0",
                        borderBottom: "0",
                        border: "0",
                      }}
                    >
                      Cetak Tiket
                    </Button>
                  ) : (
                    <Button
                      style={{
                        background: "#FF0000",
                        color: "white",
                        borderTopRightRadius: "0",
                        borderTopLeftRadius: "0",
                        border: "0",
                      }}
                    >
                      Lanjut Bayar
                    </Button>
                  )}
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          ))}
      </Accordion>
    </Container>
  );
}

export default AccordionRiwayat;
