import { FacebookLogo, InstagramLogo } from "phosphor-react";
import React from "react";

export default function FooterInfo() {
  return (
    <>
      <div className="text-white flex flex-col gap-20 pl-6">
        <div>
          <p className="text-3xl py-7">BAR</p>
          <div className="flex flex-col gap-4">
            <p>What's On</p>
            <p>Menu</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div>
          <p className="text-2xl pb-7">Contact</p>
          <div className="flex flex-col gap-4">
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
            <p>Stay Connected</p>
            <FacebookLogo size={25} />
            <InstagramLogo size={25} />
          </div>
        </div>
        <div>
          <p className="text-2xl pb-7">Opening Hours</p>
          <div className="flex flex-col gap-4">
            <p>Mon - Fri: 8am - 8pm</p>
            <p>Saturday: 9am - 7pm</p>
            <p>Sunday: 9am - 8pm</p>
            <p>500 Terry Francine St. </p>
            <p>San Francisco, CA 94158</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t mt-20 border-white/40">
        <p className="w-60 text-center pt-10 text-white pb-5">
          © 2035 by Bar. Powered and secured by Dejan
        </p>
      </div>
    </>
  );
}
