import { Col, Container, Row, Image } from "react-bootstrap";
import "./OfferBanner.css";
import Marquee from "react-fast-marquee";
import car from "/icons/car.png";
import BookDrivingBtn from "../button/BookDrivingBtn";
const OfferBanner = () => {
  return (
    <>
      <div className="offerBanner-bg">
        <Container>
          <Row className="py-5">
            <Col className="text-center">
              <Marquee gradient={false} speed={70} autoFill={false}>
                <h6 className="mx-4 fw-light lh-base">
                  <Image
                    src={car}
                    height={50}
                    width={50}
                    className="mx-2"
                  ></Image>
                  Join <b> ROAD TEST DRIVING SCHOOL </b> today for a
                  comfortable, engaging, and rewarding learning experience.
                </h6>
              </Marquee>
              <BookDrivingBtn></BookDrivingBtn>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OfferBanner;
