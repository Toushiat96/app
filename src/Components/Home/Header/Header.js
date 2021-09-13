import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";
import "./Header.css";
const Header = () => {
  const style1 = {
    paddingTop: "30px",
    color: "white",
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navber navbar-light"
    >
      <Container>
        <Navbar.Brand href="/home" className="logo">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav">
            <Nav.Link href="/portfolio" style={style1}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="/price" style={style1}>
              Pricing
            </Nav.Link>
            <Nav.Link
              href="https://connectinghelpinghandsfoundation.org/"
              id="testimonials"
              style={{ color: "white" }}
            >
              Upcoming <br /> Events
            </Nav.Link>
            <Nav.Link
              href="https://www.VonElijahFitness.com/"
              style={{ color: "white" }}
            >
              Von Elijah <br /> Fitness
            </Nav.Link>
            <Nav.Link
              href="https://www.PayAllAthletes.com/"
              style={{ color: "white" }}
            >
              Pay All <br /> Athletes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
