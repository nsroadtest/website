import { Col, Container, Row, Card, Button } from "react-bootstrap";
import "./Courses.css";
import courses from "../../data/courses.ts";
import BookDrivingBtn from "../Button/BookDrivingBtn.tsx";
const Courses = () => {
  const heading = "Our Courses";
  const ribbonMessage = "Top Choice";
  const desc =
    "We provide a variety of driving courses to meet your needs. Whether you're a beginner or looking to improve your skills, we have the right course for you.";

  return (
    <>
      <div className="courses-bg py-3">
        <Container fluid>
          <Row>
            <h1 className="text-center text-uppercase pt-5">{heading}</h1>
            <p className="fw-light lh-base text-center mb-5">{desc}</p>
          </Row>
          <Row>
            {courses.map((course) => (
              <Col key={course.id} xs={12} md={6} lg={4} className="mb-4">
                <Card className="course-card-bg text-white h-100 p-4">
                  {course.title === "Premium Package" && (
                    <div className="ribbon-wrapper">
                      <div className="ribbon">{ribbonMessage}</div>
                    </div>
                  )}
                  <Card.Body className="d-flex flex-column">
                    <Row className="d-flex justify-content-between align-items-center">
                      <Col xs={6}>
                        <Card.Title className="course-card-title fs-4">
                          {course.title}
                        </Card.Title>
                      </Col>
                      <Col xs={6} className="text-end">
                        <span className="course-card-price fs-5">
                          {course.price}+tax
                        </span>
                      </Col>
                    </Row>
                    <hr></hr>
                    <div className="flex-grow-1 lh-lg fs-6 fw-light m-md-3 m-0">
                      <ul>
                        {course.coverage.map((item) => (
                          <li key={item.id}>{item.description}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center mt-3">
                      <BookDrivingBtn></BookDrivingBtn>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Courses;
