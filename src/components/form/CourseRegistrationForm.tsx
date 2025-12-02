import { Form, Button, Col, Row } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
interface FormData {
  name: string;
  contact: string;
  email: string;
  license: string;
  course: string;
  message: string;
}

const CourseRegistrationForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<FormData>({
    mode: "onChange", // For real-time validation
  });

  // Watch the contact field to validate in real-time
  watch("contact");

  const onSubmit = async (data: FormData) => {
    try {
      if (Object.keys(errors).length > 0) {
        return;
      }

      // EmailJS parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.contact,
        license_number: data.license || "Not provided",
        selected_course: data.course,
        message: data.message || "No message provided",
        to_name: "Driving School Admin", // Replace with actual recipient name
      };

      // Replace these with your actual EmailJS credentials
      const SERVICE_ID = "service_i3478yg"; // e.g., "service_smtp"
      const TEMPLATE_ID = "template_74hq0iq"; // e.g., "template_xxxxxxx"
      const PUBLIC_KEY = "u37hmXPIcyOfhaC1e"; // e.g., "public_xxxxxxxxxx"

      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log("Email sent successfully:", result.text);
      alert("Registration successful! Confirmation email sent.");

      // Reset the form after successful submission
      reset({
        name: "",
        contact: "",
        email: "",
        license: "",
        course: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending error:", error);
      alert(
        "There was an error submitting your registration. Please try again."
      );
    }
  };

  // Phone validation function for North American format
  const validatePhone = (value: string) => {
    const phoneRegex =
      /^(\+1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
    return (
      phoneRegex.test(value) ||
      "Please enter a valid North American phone number"
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="text-white">
        <Col xs={12} md={6} lg={6}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name *</Form.Label>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Name cannot exceed 50 characters",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Name can only contain letters and spaces",
                },
              }}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  type="text"
                  placeholder="Enter full name"
                  isInvalid={!!errors.name}
                  value={field.value || ""} // Ensure controlled component
                />
              )}
            />
            {errors.name && (
              <Form.Text className="text-danger">
                {errors.name.message}
              </Form.Text>
            )}
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Contact *</Form.Label>
            <Controller
              name="contact"
              control={control}
              rules={{
                required: "Contact number is required",
                validate: validatePhone,
              }}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  type="tel"
                  placeholder="Enter Contact Number (e.g., 123-456-7890)"
                  isInvalid={!!errors.contact}
                  value={field.value || ""} // Ensure controlled component
                />
              )}
            />
            {errors.contact && (
              <Form.Text className="text-danger">
                {errors.contact.message}
              </Form.Text>
            )}
            <Form.Text className="text-warning">
              We'll never share your contact with anyone else.
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row className="text-white">
        <Col xs={12} md={12} lg={12}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email *</Form.Label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              }}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  type="email"
                  placeholder="Enter email"
                  isInvalid={!!errors.email}
                  value={field.value || ""} // Ensure controlled component
                />
              )}
            />
            {errors.email && (
              <Form.Text className="text-danger">
                {errors.email.message}
              </Form.Text>
            )}
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
            <Controller
              name="license"
              control={control}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  type="text"
                  placeholder="Enter license number"
                  isInvalid={!!errors.license}
                  value={field.value || ""} // Ensure controlled component
                />
              )}
            />
            {errors.license && (
              <Form.Text className="text-danger">
                {errors.license.message}
              </Form.Text>
            )}
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Form.Group className="mb-3" controlId="formBasicCourse">
            <Form.Label>Course *</Form.Label>
            <Controller
              name="course"
              control={control}
              rules={{ required: "Please select a course" }}
              render={({ field }) => (
                <Form.Select
                  {...field}
                  isInvalid={!!errors.course}
                  value={field.value || ""} // Ensure controlled component for select
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
              )}
            />
            {errors.course && (
              <Form.Text className="text-danger">
                {errors.course.message}
              </Form.Text>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Row className="text-white">
        <Col xs={12} md={12} lg={12}>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  isInvalid={!!errors.message}
                  value={field.value || ""} // Ensure controlled component
                />
              )}
            />
            {errors.message && (
              <Form.Text className="text-danger">
                {errors.message.message}
              </Form.Text>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Button
        variant="success"
        className="my-3"
        type="submit"
        disabled={isSubmitting || Object.keys(errors).length > 0}
      >
        {isSubmitting ? "Submitting..." : "Register"}
      </Button>
    </Form>
  );
};

export default CourseRegistrationForm;
