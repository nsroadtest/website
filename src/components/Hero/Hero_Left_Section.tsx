import { Image } from "react-bootstrap";
import hero1 from "/images/hero/hero-1.jpeg";
const Hero_Left_Section = () => {
  return (
    <>
      <div className="hero-half left-half">
        <Image src={hero1} className="carousel-image "></Image>
      </div>
    </>
  );
};

export default Hero_Left_Section;
