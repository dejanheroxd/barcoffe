import React from "react";
import FooterInfo from "./FooterInfo";

export default function () {
  return (
    <div className="bg-secondary">
      <div className="text-center text-white">
        <p className="pb-20 text-3xl font-semibold">Our Location</p>
      </div>
      <div>
        <div className="flex justify-center">
          <iframe
            className="h-96 w-screen"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1542.2209596802143!2d22.92334590581675!3d39.36887299247131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a76c141033c815%3A0x4dee275fc09417a!2zzp_Ouc66zr_Ovc-MzrzOv8-FIDU1LTQ3LCDOks-MzrvOv8-CIDM4MyAzNA!5e0!3m2!1sel!2sgr!4v1713598053907!5m2!1sel!2sgr"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <FooterInfo />
    </div>
  );
}
