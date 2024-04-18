import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  function navToggle() {
    setNavOpen(!navOpen);
  }

  const navVars = {
    initial: {
      scaleY: 0,
    },

    animate: {
      scaleY: 1,
      transition: { duration: 0.3 },
      ease: [0.12, 0, 0.39, 0],
    },
    exit: {
      scaleY: 0,
      transition: { duration: 0.3 },
      ease: [0.12, 0, 0.39, 0],
    },
  };

  return (
    <>
      <div
        onClick={() => navToggle()}
        className="flex cursor-pointer flex-col z-30 absolute left-6 top-[26px] gap-[6px]"
      >
        <div className="w-6 bg-white h-[2px]"></div>
        <div className="w-6 bg-white h-[2px]"></div>
        <div className="w-6 bg-white h-[2px]"></div>
      </div>
      <AnimatePresence>
        {navOpen && (
          <motion.nav
            variants={navVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="top-0 origin-top z-10 bg-primary fixed h-screen w-screen flex justify-center items-center flex-col"
          >
            <ul className="text-white text-center flex flex-col gap-5 text-2xl">
              <Link onClick={() => navToggle()} to="/">
                <li>Home</li>
              </Link>
              <Link onClick={() => navToggle()} to="About">
                <li>About</li>
              </Link>
              <Link onClick={() => navToggle()} to="Menu">
                <li>Menu</li>
              </Link>
              <Link onClick={() => navToggle()} to="/Gallery">
                <li>Gallery</li>
              </Link>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
