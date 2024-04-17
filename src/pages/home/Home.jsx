import React from "react";
import About from "./about-sec/AboutSec";
import Gallery from "./gallery-sec/GallerySec";
import Menu from "./menu-sec/MenuSec";
import LandingPage from "./landing-sec/LandingPage";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <About />
      <Gallery />
      <Menu />
    </div>
  );
}
