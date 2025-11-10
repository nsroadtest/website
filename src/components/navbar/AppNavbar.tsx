import "./AppNavbar.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "/logo.png";
import BookDrivingBtn from "../Button/BookDrivingBtn";

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="d-inline-block align-top logo"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="mx-1 navLinks navLink-capitalize" href="#home">
              Courses
            </Nav.Link>
            <Nav.Link className="mx-1 navLinks navLink-capitalize" href="#link">
              About
            </Nav.Link>
            <Nav.Link className="mx-1 navLinks navLink-capitalize" href="#link">
              <BookDrivingBtn></BookDrivingBtn>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
