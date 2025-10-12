import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "./OfferBanner.css";
import Marquee from "react-fast-marquee";
import car from "/icons/car.png";
const OfferBanner = () => {
  return (
    <>
      <div className="offerBanner-bg">
        <Container>
          <Row className="py-5">
            <Col className="text-center">
              <Marquee gradient={false} speed={70} autoFill={false}>
                <h6 className="text-white mx-4">
                  <Image
                    src={car}
                    height={50}
                    width={50}
                    className="mx-2"
                  ></Image>
                  Join ROAD TEST DRIVING SCHOOL today for a comfortable,
                  engaging, and rewarding learning experience.
                </h6>
              </Marquee>
              <Button className="text-uppercase btn btn-warning">
                Book Driving Lesson
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OfferBanner;
