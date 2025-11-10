import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactBanner from "./components/Banner/ContactBanner";
import OfferBanner from "./components/Banner/OfferBanner";
import Courses from "./components/Course/Courses";
import CourseRegistration from "./components/CourseRegisteration/CourseRegistration";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import AppNavbar from "./components/navbar/AppNavbar";
import RoadTestVideo from "./components/Video/RoadTestVideo";

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
      <Footer></Footer>
    </>
  );
}

export default App;
