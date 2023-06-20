import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import Category from "./components/industry/Category";
import Navbar from "./components/navbar/navbar.js";
import Home from "./components/home/Home";
import Footer from "./components/footer/footer";
import Contact from "./components/contactUs/Contact";
import Team from "./components/team/team";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/industry" element={<Category />}></Route>
          <Route exact path="/building" element={<Category />}></Route>
          <Route exact path="/medical" element={<Category />}></Route>
          <Route exact path="/service" element={<Category />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
