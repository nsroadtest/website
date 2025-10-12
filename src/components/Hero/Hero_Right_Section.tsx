import { Button, Col, Row, Image } from "react-bootstrap";
import safety from "/icons/safety.png";
import trust from "/icons/trust.png";
import star from "/icons/star.png";
import online from "/icons/online.png";
const Hero_Right_Section = () => {
  return (
    <div className="hero-half right-half">
      <h1 className="text-center text-white text-uppercase">About us</h1>
      <p className="fw-light text-white lh-base">
        Nothing less than the best will do at Road Test Driving School since we
        are committed to and passionate about our objectives. With each lesson,
        you will make the most progress possible. With the fewest driving
        lessons possible, we will get you to driving test standard.
      </p>
      <Row className="my-3">
        <Col xs={12} md={6} lg={6} className="my-2">
          <Image src={safety} height={50} width={50}></Image>
          <span className="text-white fs-4">Vehicle safety</span>
          <h6 className="text-white line-spacing fw-light">
            To provide you a fantastic first driving experience, all of our
            automobiles are of the greatest calibre and level, and the majority
            are only 3 years old or less.
          </h6>
        </Col>
        <Col xs={12} md={6} lg={6} className="my-2">
          <Image src={trust} height={50} width={50}></Image>
          <span className="text-white fs-4">Trusted Work</span>
          <h6 className="text-white line-spacing fw-light">
            Whether you are starting from scratch (including certification),
            brushing up before a test or need defensive driving lessons, we
            invite everyone to start driving with us.
          </h6>
        </Col>
      </Row>
      <Row className="my-3">
        <Col xs={12} md={6} lg={6} className="my-2">
          <Image src={star} height={50} width={50}></Image>
          <span className="text-white fs-4">Skilled Instructor</span>
          <h6 className="text-white line-spacing fw-light">
            A trained professional with the highest industry-acceptable
            qualification and a standard that permits teaching individuals.
          </h6>
        </Col>
        <Col xs={12} md={6} lg={6} className="my-2">
          <Image src={online} height={50} width={50}></Image>
          <span className="text-white fs-4">E-Learning Classes</span>
          <h6 className="text-white line-spacing fw-light">
            Students complete E-Learning independently and asynchronously (at
            their own pace, on their own schedule). No webcams, no set dates.
            Ideal for those with busy schedules.
          </h6>
        </Col>
      </Row>
    </div>
  );
};

export default Hero_Right_Section;
