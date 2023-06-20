import React from "react";
import Carousel from "../carousel/carousel";
import About from "../aboutus/about";
import Team from "../team/team";
import Contact from "../contactUs/Contact";

export default function Home() {
  return (
    <div>
      <Carousel />
      <About />
      <Team />
      <Contact />
    </div>
  );
}
