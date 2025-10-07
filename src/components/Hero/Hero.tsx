import { Button, Image } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="background-gradient hero">
      <div className="hero-half left-half">
        <Image
          src="https://placehold.co/950x660"
          className="carousel-image "
        ></Image>
      </div>
      <div className="hero-half right-half">
        <h1 className="text-white text-uppercase">
          Raising Your Driving Confidence
        </h1>
        <p className="text-light">
          Learning to drive is the most rewarding experience that anyone can
          undergo. As a result, selecting the right driving school is critical
          as you garner confidence and knowledge of traffic and road rules.
          <br /> Our course focuses on safe driving principles such as space and
          vision. When you enrol in Road Test driving school, you will receive
          the most comprehensive training programme in the country as well as
          world-class service. <br />
          We offer a variety of driving classes and courses, each of which has
          been thoughtfully created to assist you in obtaining your driving
          licence as quickly as possible. We provide driving lessons in Halifax
          and Dartmouth with the best driving instructors available.
        </p>
        <Button className="text-uppercase btn btn-warning">
          Book Driving Lesson
        </Button>
      </div>
    </div>
  );
};

export default Hero;
