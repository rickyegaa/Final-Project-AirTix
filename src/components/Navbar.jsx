
import React, { useState, useEffect } from "react";


import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, getMe } from "../redux/actions/authActions";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCircleNotifications } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

function Homepage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    dispatch(getMe(null, null, null));
  }, [dispatch]);

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={require("../assets/img/AirTix.svg").default}
              alt="AirTix.svg"
              style={{
                top: "70px",
                left: "70px",
                width: "85px",
                height: "85px",
              }}
            />
          </Navbar.Brand>

          <Nav className="d-flex justify-content-end gap-2">
            {isLoggedIn ? (
              <>
                <Button
                  onClick={() => {
                    dispatch(logout(navigate));
                  }}
                  as={Link}
                  to={"/"}
                  style={{ background: "#7126B5" }}
                  className="d-flex align-items-center justify-content-between border-0 rounded-3"
                >
                  Logout
                </Button>
                <Button
                  className={`bg-transparent border-0 option ${
                    selectedOption === "option1" ? "active" : ""
                  }`}
                  as={Link}
                  to="/riwayat"
                  onClick={() => handleOptionClick("option1")}
                >
                  <RxHamburgerMenu
                    color={
                      selectedOption === "option1" ? " #7126B5BF" : "#3C3C3C"
                    }
                    size={25}
                  />
                </Button>
                <Button
                  className={`bg-transparent border-0 option ${
                    selectedOption === "option2" ? "active" : ""
                  }`}
                  as={Link}
                  to="/notifikasi"
                  onClick={() => handleOptionClick("option2")}
                >
                  <MdCircleNotifications
                    color={
                      selectedOption === "option2" ? " #7126B5BF" : "#3C3C3C"
                    }
                    size={25}
                  />
                </Button>
                <Button
                  className={`bg-transparent border-0 option ${
                    selectedOption === "option3" ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick("option3")}
                >
                  <VscAccount
                    color={
                      selectedOption === "option3" ? " #7126B5BF" : "#3C3C3C"
                    }
                    size={25}
                  />
                </Button>
              </>
            ) : (
              <>
                <Button
                  as={Link}
                  to={"/Login"}
                  style={{ background: "#7126B5" }}
                  className="d-flex align-items-center justify-content-between border-0 rounded-3"
                >
                  Login
                </Button>
                <Button
                  as={Link}
                  to={"/Register"}
                  style={{ background: "#7126B5" }}
                  className="d-flex align-items-center justify-content-between border-0 rounded-3"
                >
                  Register
                </Button>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Homepage;
