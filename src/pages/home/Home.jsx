import React from "react";
import About from "./about-sec/AboutSec";
import Gallery from "./gallery-sec/GallerySec";
import Menu from "./menu-sec/MenuSec";
import LandingPage from "./landing-sec/LandingPage";
import CustomerSec from "./customer-sec/CustomerSec";
import OurStorySec from "./ourStory-sec/OurStorySec";
import aboutImg from "../../assets/about-image.png";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <CustomerSec />
      <div>
        <About />
        <div className="h-[300px]">
          <img src={aboutImg} className="h-full w-full object-cover" alt="" />
        </div>
        <OurStorySec />
      </div>
      <Menu />
      <Gallery />
    </div>
  );
}
