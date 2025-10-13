import { Row, Col, Image, Container } from "react-bootstrap";
import "./ContactBanner.css";
import mapIcon from "/icons/map.png";
import call from "/icons/call.png";
import mail from "/icons/mail.png";
import facebook from "/icons/facebook.png";
import instagram from "/icons/instagram.png";
import whatsapp from "/icons/whatsapp.png";
const ContactBanner = () => {
  return (
    <>
      <div className="banner-bg">
        <Container fluid>
          <Row className="d-flex justify-content-between align-items-center px-3 py-2">
            <Col xs={12} md={7} lg={7}>
              <Row className="py-2">
                <Col
                  md={4}
                  className="text-center text-md-start custom-banner-margin "
                >
                  <Image
                    src={mapIcon}
                    width={25}
                    height={25}
                    className="mx-2"
                  ></Image>
                  <span className="text-white">
                    64 Fairfax Dr Halifax, NS, B3S 1N5
                  </span>
                </Col>
                <Col
                  md={3}
                  className="text-center text-md-start custom-banner-margin "
                >
                  <Image
                    src={call}
                    width={25}
                    height={25}
                    className="mx-2"
                  ></Image>
                  <span className="text-white">(902) 830-7287</span>
                </Col>
                <Col
                  md={4}
                  className="text-center text-md-start custom-banner-margin "
                >
                  <Image
                    src={mail}
                    width={25}
                    height={25}
                    className="mx-2"
                  ></Image>
                  <span className="text-white">nsroadtest@gmail.com</span>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <Row className="py-2 text-center text-md-end">
                <Col>
                  <Image src={facebook} width={30} height={30}></Image>
                </Col>
                <Col>
                  <Image src={instagram} width={30} height={30}></Image>
                </Col>
                <Col>
                  <Image src={whatsapp} width={30} height={30}></Image>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default ContactBanner;
