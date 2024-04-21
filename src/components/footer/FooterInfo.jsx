import { FacebookLogo, InstagramLogo } from "phosphor-react";
import React from "react";

export default function FooterInfo() {
  return (
    <>
      <div className="flex flex-col gap-20 pl-6 text-white lg:flex-row lg:justify-between lg:px-20 lg:pt-20 xl:px-40 2xl:px-72">
        <div>
          <p className="py-7 text-3xl">BAR</p>
          <div className="flex flex-col gap-4">
            <p>What's On</p>
            <p>Menu</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="lg:pt-7">
          <p className="pb-7 text-2xl">Contact</p>
          <div className="flex flex-col gap-4">
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
            <p>Stay Connected</p>
            <FacebookLogo size={25} />
            <InstagramLogo size={25} />
          </div>
        </div>
        <div>
          <p className="pb-7 text-2xl lg:pt-7">Opening Hours</p>
          <div className="flex flex-col gap-4">
            <p>Mon - Fri: 8am - 8pm</p>
            <p>Saturday: 9am - 7pm</p>
            <p>Sunday: 9am - 8pm</p>
            <p>500 Terry Francine St. </p>
            <p>San Francisco, CA 94158</p>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center border-t border-white/40">
        <p className="w-60 pb-5 pt-10 text-center text-white">
          © 2035 by Bar. Powered and secured by Dejan
        </p>
      </div>
    </>
  );
}
