import { Row, Col, Image, Container } from "react-bootstrap";
import "./ContactBanner.css";
import mapIcon from "/icons/map.png";
import phone from "/icons/phone.png";
import mail from "/icons/mail.png";
import facebook from "/icons/facebook.png";
import instagram from "/icons/instagram.png";
import whatsapp from "/icons/whatsapp.png";
const ContactBanner = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={9} lg={9}>
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
                <span>64 Fairfax Dr Halifax, NS, B3S 1N5</span>
              </Col>
              <Col
                md={3}
                className="text-center text-md-start custom-banner-margin "
              >
                <Image
                  src={phone}
                  width={25}
                  height={25}
                  className="mx-2"
                ></Image>
                <span>(902) 830-7287</span>
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
                <span>nsroadtest@gmail.com</span>
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
    </>
  );
};
export default ContactBanner;
