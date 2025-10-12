import { Image } from "react-bootstrap";
import aboutUs1 from "/images/hero/aboutUs-1.jpg";
const Hero_Left_Section = () => {
  return (
    <>
      <div>
        <Image src={aboutUs1} className="carousel-image "></Image>
      </div>
    </>
  );
};

export default Hero_Left_Section;
