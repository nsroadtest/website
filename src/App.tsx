import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactBanner from "./components/Banner/ContactBanner";
import OfferBanner from "./components/Banner/OfferBanner";
import Hero from "./components/Hero/Hero";
import AppNavbar from "./components/navbar/AppNavbar";

function App() {
  return (
    <>
      <ContactBanner></ContactBanner>
      <AppNavbar></AppNavbar>
      <Hero></Hero>
      <OfferBanner></OfferBanner>
      <AboutUs></AboutUs>
    </>
  );
}

export default App;
