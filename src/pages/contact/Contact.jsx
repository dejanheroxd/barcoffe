import React from "react";
import ContactForm from "./ContactForm";

export default function Contact({ setContactActive }) {
  return (
    <div className="fixed left-0 right-0 top-0 h-screen bg-primary/50 text-white">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className=" bg-primary">
          <ContactForm setContactActive={setContactActive} />
        </div>
      </div>
    </div>
  );
}
