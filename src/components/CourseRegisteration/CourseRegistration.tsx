import { Container, Image, Row, Col } from "react-bootstrap";
import "./CourseRegistration.css";
import CourseRegistrationForm from "../form/CourseRegistrationForm";
const CourseRegistration = () => {
  const heading = "Course Registration";
  return (
    <>
      <div className="registration-section-bg py-5">
        <Container fluid>
          <Row>
            <h1 className="text-center text-white mb-4 text-uppercase">
              {heading}
            </h1>
          </Row>
          <Row className="align-items-center">
            <Col xs={12} md={6} lg={6} className="p-4 registration-form-div ">
              <CourseRegistrationForm></CourseRegistrationForm>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Image
                src="https://roadtestdrivingschool.com/images/placeholder/image-6.png"
                alt="Course Registration"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CourseRegistration;
