import { Col, Container, Row } from "react-bootstrap";
import "./AboutUs.css";
import AboutUs_Left_Section from "./AboutUs_Left_Section";
import AboutUs_Right_Section from "./AboutUs_Right_Section";

const Hero = () => {
  return (
    <div style={{ background: "#1d6f9c" }}>
      <Container className="py-3"></Container>
      <Container fluid>
        <Row className="py-3">
          <Col xs={12} md={6} lg={6} className="d-flex align-items-center">
            <AboutUs_Right_Section></AboutUs_Right_Section>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <AboutUs_Left_Section></AboutUs_Left_Section>
          </Col>
        </Row>
        {/* <div className="background-gradient hero">
        
       
      </div> */}
      </Container>
    </div>
  );
};

export default Hero;
