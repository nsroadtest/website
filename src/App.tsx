import "./App.css";
import ContactBanner from "./components/Banner/ContactBanner";
import Hero from "./components/Hero/Hero";
import AppNavbar from "./components/navbar/AppNavbar";

function App() {
  return (
    <>
      <ContactBanner></ContactBanner>
      <AppNavbar></AppNavbar>
      <Hero></Hero>
    </>
  );
}

export default App;
