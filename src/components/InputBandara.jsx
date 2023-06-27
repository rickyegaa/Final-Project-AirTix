import React, { useEffect, useState } from "react";
import { VscArrowSwap } from "react-icons/vsc";
import { TbPlaneDeparture } from "react-icons/tb";
import { TbPlaneArrival } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { getApiAirports } from "../redux/actions/postActions";
import { Form, Button, Modal, ListGroup } from "react-bootstrap";

function InputBandara() {
  const [showBandaraFrom, setShowBandaraFrom] = useState(false);
  const [showBandaraTo, setShowBandaraTo] = useState(false);
  const [queryFrom, setQueryFrom] = useState("");
  const [queryTo, setQueryTo] = useState("");

  const dispatch = useDispatch();
  const { airports } = useSelector((state) => state.post);

  const handleCloseBandaraFrom = () => setShowBandaraFrom(false);
  const handleShowBandaraFrom = () => setShowBandaraFrom(true);
  const handleCloseBandaraTo = () => setShowBandaraTo(false);
  const handleShowBandaraTo = () => setShowBandaraTo(true);

  const onSearchBandaraFrom = (namaBandaraFrom) => {
    setQueryFrom(namaBandaraFrom);
  };
  const onSearchBandaraTo = (namaBandaraTo, codeBandaraTo) => {
    setQueryTo(namaBandaraTo);
  };

  useEffect(() => {
    dispatch(getApiAirports());
  }, [dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "input1") {
      setQueryFrom(value);
    } else if (name === "input2") {
      setQueryTo(value);
    }

    setQueryFrom(value);
    setQueryTo(value);
  };

  const handleSwitchClick = () => {
    setQueryFrom(queryTo);
    setQueryTo(queryFrom);
  };

  return (
    <>
      <Form className="d-flex gap-3 align-items-center justify-content-center ">
        <Form.Group
          className=" mb-3 d-flex align-items-center justify-content-between"
          controlId="formBasicEmail"
        >
          <Form.Group>
            <TbPlaneDeparture size={25} />
            <Form.Label>From</Form.Label>
          </Form.Group>
          <Form.Control
            name="input1"
            value={queryFrom}
            onChange={handleInputChange}
            onClick={handleShowBandaraFrom}
            type="text"
            placeholder={queryFrom ? queryFrom : "Jakarta(JKTA)"}
            className="inputLocation"
            list="dataFrom"
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Button
            style={{ background: "#7126B5", border: "0" }}
            className="d-flex align-items-center justify-content-between border-0"
            onClick={handleSwitchClick}
          >
            <VscArrowSwap />
          </Button>
        </Form.Group>

        <Form.Group
          className="gap-3 mb-3 d-flex align-items-center justify-content-between"
          controlId="formBasicEmail"
        >
          <Form.Group>
            <TbPlaneArrival size={25} />
            <Form.Label>To</Form.Label>
          </Form.Group>
          <Form.Control
            name="input2"
            value={queryTo}
            onChange={handleInputChange}
            type="text"
            placeholder={queryTo ? queryTo : "Melbourne(MLB)"}
            className="inputLocation"
            list="dataTo"
            onClick={handleShowBandaraTo}
            readOnly
          />
        </Form.Group>
      </Form>
      <Modal show={showBandaraFrom} onHide={handleCloseBandaraFrom} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cari Bandara</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="search-inner">
              <Form.Control
                type="text"
                placeholder="Masukan Kota atau Negara"
                onChange={(e) => setQueryFrom(e.target.value)}
              />
              <ListGroup>
                {queryFrom
                  ? airports
                      .filter(
                        (bandara) =>
                          bandara.name.toLowerCase().includes(queryFrom) ||
                          bandara.code.toLowerCase().includes(queryFrom)
                      )
                      .slice(0, 5)
                      .map((item) => (
                        <>
                          <ListGroup.Item
                            key={item.id}
                            onClick={() => onSearchBandaraFrom(item.name)}
                          >
                            {item.name} ({item.code})
                          </ListGroup.Item>
                        </>
                      ))
                  : ""}
              </ListGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseBandaraFrom}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showBandaraTo} onHide={handleCloseBandaraTo} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cari Bandara</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="search-inner">
              <Form.Control
                type="text"
                placeholder="Masukan Kota atau Negara"
                onChange={(e) => setQueryTo(e.target.value)}
              />
              <ListGroup>
                {queryTo
                  ? airports
                      .filter(
                        (bandara) =>
                          bandara.name.toLowerCase().includes(queryTo) ||
                          bandara.code.toLowerCase().includes(queryTo)
                      )
                      .slice(0, 5)
                      .map((item) => (
                        <>
                          <ListGroup.Item
                            key={item.id}
                            onClick={() => onSearchBandaraTo(item.name)}
                          >
                            {item.name} ({item.code})
                          </ListGroup.Item>
                        </>
                      ))
                  : ""}
              </ListGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseBandaraTo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InputBandara;
