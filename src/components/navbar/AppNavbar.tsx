import "./AppNavbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "/logo.png";

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
