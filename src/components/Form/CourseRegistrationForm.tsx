import { Form, Button, Col, Row } from "react-bootstrap";

const CourseRegistrationForm = () => {
  return (
    <Form>
      <Row className="text-white">
        <Col xs={12} md={6} lg={6}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Contact</Form.Label>
            <Form.Control type="number" placeholder="Enter Contact Number" />
            <Form.Text className="text-warning">
              We'll never share your contact with anyone else.
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row className="text-white">
        <Col xs={12} md={12} lg={12}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-warning">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row className="text-white">
        <Col xs={12} md={6} lg={6}>
          <Form.Group className="mb-3" controlId="formBasicLicense">
            <Form.Label>License Number</Form.Label>
            <Form.Control type="text" placeholder="Enter license number" />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Form.Group className="mb-3" controlId="formBasicCourse">
            <Form.Label>Course</Form.Label>
            <Form.Select
            // name="numberOfGuests"
            >
              <option value="">Select Course</option>
              <option value="Standard Driving Lesson">
                Standard Driving Lesson
              </option>
              <option value="Premium Package">Premium Package</option>
              <option value="VIP Packages">VIP Packages</option>
              <option value="Road Test Package">Road Test Package</option>
              <option value="Hourly Lessons">Hourly Lessons</option>
              <option value="Defensive Driving Program">
                Defensive Driving Program
              </option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="text-white">
        <Col xs={12} md={12} lg={12}>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
            />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="success" className="my-3" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default CourseRegistrationForm;
