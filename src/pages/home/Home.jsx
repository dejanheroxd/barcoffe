import React from "react";
import About from "./about-sec/AboutSec";
import Gallery from "./gallery-sec/GallerySec";
import Menu from "./menu-sec/MenuSec";
import LandingPage from "./landing-sec/LandingPage";
import CustomerSec from "./customer-sec/CustomerSec";
import OurStorySec from "./ourStory-sec/OurStorySec";
import aboutImg from "../../assets/about-image.png";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <CustomerSec />
      <div className="md:grid md:grid-cols-3 lg:h-[800px]">
        <About />
        <div className="h-[300px] lg:h-[800px]">
          <img
            src={aboutImg}
            className="h-full w-full object-cover md:h-[700px] lg:h-[800px]"
            alt=""
          />
        </div>
        <OurStorySec />
      </div>
      <Menu />
      <Gallery />
      <Footer />
    </div>
  );
}
