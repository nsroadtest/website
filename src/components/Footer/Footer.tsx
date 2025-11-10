import { Container, Row, Col, Image } from "react-bootstrap";
import "./Footer.css";
import logo from "/logo.png";
import facebook from "/icons/facebook.png";
import instagram from "/icons/instagram.png";
import whatsapp from "/icons/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer-bg py-4">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={3} className="text-center mb-3 mb-md-0">
            <Image src={logo} alt="Logo" width={220} />
          </Col>
          <Col
            xs={12}
            md={5}
            className="text-light text-center text-md-start mb-3 mb-md-0"
          >
            <div>
              <div className="fw-bold">Working Hours</div>
              <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
              <div>Sat: 10:00 AM - 4:00 PM</div>
              <div>Sun: Closed</div>
            </div>
            <div className="mt-3">
              <div className="fw-bold">Contact</div>
              <div>(902) 830-7287</div>
              <div>nsroadtest@gmail.com</div>
            </div>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-end">
            <div className="footer-socials">
              <a href="#" className="mx-2">
                <Image src={facebook} width={30} height={30} alt="Facebook" />
              </a>
              <a href="#" className="mx-2">
                <Image src={instagram} width={30} height={30} alt="Instagram" />
              </a>
              <a href="#" className="mx-2">
                <Image src={whatsapp} width={30} height={30} alt="WhatsApp" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            className="text-center text-white mt-3"
            style={{ fontSize: "14px" }}
          >
            © {new Date().getFullYear()} Road Test Driving School. All rights
            reserved.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
