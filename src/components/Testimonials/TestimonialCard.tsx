import { Card, Row, Col } from "react-bootstrap";
import StarRating from "./StarRating";
import type { Testimonial } from "./Testimonials";

interface Props {
  testimonial: Testimonial;
}
const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <>
      <Card className="h-100 border-0 shadow-sm testimonials-card-bg">
        <Card.Body className="d-flex flex-column p-4">
          <div className="d-flex align-items-center mb-3">
            <div className="flex-shrink-0">
              <img
                src={
                  testimonial.photoUrl ||
                  `https://ui-avatars.com/api/?name=${testimonial.reviewerName}&background=0D8ABC&color=fff`
                }
                alt={testimonial.reviewerName}
                className="rounded-circle"
                width="250"
                height="250"
              />
            </div>
            <div className="ms-3">
              <Card.Title className="h6 mb-0 text-white">
                {testimonial.reviewerName}
              </Card.Title>
              <small className="text-white">{testimonial.date}</small>
            </div>
          </div>
          <StarRating rating={testimonial.rating} />
          <Card.Text className="mt-3 text-white flex-grow-1 fs-6 fw-light p-4">
            "{testimonial.reviewText}"
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default TestimonialCard;
