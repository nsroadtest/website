import "./Hero.css";
import Hero_Left_Section from "./Hero_Left_Section";
import Hero_Right_Section from "./Hero_Right_Section";

const Hero = () => {
  return (
    <div className="background-gradient hero">
      <Hero_Left_Section></Hero_Left_Section>
      <Hero_Right_Section></Hero_Right_Section>
    </div>
  );
};

export default Hero;
