import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Button, Container, Row, Col } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllAirports } from "../redux/actions/postActions";
import RiwayatKosong from "../components/RiwayatKosong";
import RiwayatTersedia from "../components/RiwayatTersedia";
function Riwayat() {
  const dispatch = useDispatch();
  const { airports } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllAirports());
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
            <Button style={{ background: "#A06ECE", border: "0" }}>
              <LuFilter />
              &nbsp; Filter
            </Button>
            <Button className="bg-transparent border-0">
              <AiOutlineSearch color="#7126B5" size={25} />
            </Button>
          </Col>
        </Row>
        {airports ? <RiwayatTersedia /> : <RiwayatKosong />}
      </Container>
    </>
  );
}

export default Riwayat;
