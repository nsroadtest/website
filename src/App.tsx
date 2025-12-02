import ContactBanner from "./components/Banner/ContactBanner";
import AppNavbar from "./components/Navbar/AppNavbar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import OfferBanner from "./components/Banner/OfferBanner";
import Courses from "./components/Course/Courses";
import CourseRegistration from "./components/CourseRegisteration/CourseRegistration";
import Footer from "./components/Footer/Footer";

import Testimonials from "./components/Testimonials/Testimonials";
import RoadTestVideo from "./components/Video/RoadTestVideo";
import "./App.css";

function App() {
  return (
    <>
      <ContactBanner></ContactBanner>
      <AppNavbar></AppNavbar>
      <Hero></Hero>
      <OfferBanner></OfferBanner>
      <AboutUs></AboutUs>
      <Courses></Courses>
      <CourseRegistration></CourseRegistration>
      <RoadTestVideo></RoadTestVideo>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}

export default App;
