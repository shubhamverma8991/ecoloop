import "./App.css";
import Navbar from "./components/navbar/navbar.js";
import Carousel from "./components/carousel/carousel";
import About from "./components/aboutus/about";
import Team from "./components/team/team";
import Contact from "./components/contactUs/Contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
