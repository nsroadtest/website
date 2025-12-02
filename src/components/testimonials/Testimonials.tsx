//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import TestimonialCard from "./TestimonialCard";
import { Container } from "react-bootstrap";
import type { Testimonial } from "../../data/Testimonials";
import "./Testimonials.css";
import testimonialsData from "../../data/Testimonials-Data";

const Testimonials = () => {
  const testimonials: Testimonial[] = testimonialsData;

  return (
    <>
      <Container className="py-5">
        <Splide
          options={{
            type: "loop",
            perPage: 2,
            perMove: 1,
            gap: "1rem",
            arrows: true,
            pagination: false,
            breakpoints: {
              768: {
                perPage: 1,
              },
            },
          }}
          aria-label="Testimonials"
        >
          {testimonials.map((testimonial) => (
            <SplideSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SplideSlide>
          ))}
        </Splide>
      </Container>
    </>
  );
};

export default Testimonials;
