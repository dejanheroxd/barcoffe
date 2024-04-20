import { AnimatePresence, easeIn, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [animateBurger, setAnimteBurger] = useState(false);

  function navToggle() {
    setNavOpen(!navOpen);
    setAnimteBurger(!animateBurger);
    if (!navOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
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

  const burger1Vars = {
    initial: {
      rotate: 0,
      y: 0,
    },
    animate: {
      rotate: 45,
      y: 8,
      transition: { duration: 0.3 },
      ease: [0.12, 0, 0.39, 0],
    },
    exit: {
      rotate: 0,
      transition: {
        duration: 0.3,
      },
      ease: [0.12, 0, 0.39, 0],
    },
  };

  const burger2Vars = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: { duration: 0.3 },
      ease: [0.12, 0, 0.39, 0],
    },
    exit: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
      ease: [0.12, 0, 0.39, 0],
    },
  };

  const burger3Vars = {
    initial: {
      rotate: 0,
      transition: { duration: 0.3 },
      ease: [0.12, 0, 0.39, 0],
    },
    animate: {
      rotate: -45,
      y: -8,
      transition: { duration: 0.3 },
      ease: [0.12, 0, 0.39, 0],
    },
    exit: {
      rotate: 0,
      transition: {
        duration: 0.3,
      },
      ease: [0.12, 0, 0.39, 0],
    },
  };

  return (
    <>
      <div
        onClick={() => {
          navToggle();
        }}
        className="flex cursor-pointer flex-col z-30 fixed left-6 top-[26px] gap-[6px]"
      >
        <motion.div
          variants={burger1Vars}
          initial="initial"
          animate={animateBurger ? "animate" : "initial"}
          exit="exit"
          className="w-6 bg-white h-[2px]"
        ></motion.div>
        <motion.div
          variants={burger2Vars}
          initial="initial"
          animate={animateBurger ? "animate" : "initial"}
          exit="exit"
          className="w-6 bg-white h-[2px]"
        ></motion.div>
        <motion.div
          variants={burger3Vars}
          initial="initial"
          animate={animateBurger ? "animate" : "initial"}
          exit="exit"
          className="w-6 bg-white h-[2px]"
        ></motion.div>
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
              <Link onClick={() => navToggle()} to="/About">
                <li>About</li>
              </Link>
              <Link onClick={() => navToggle()} to="/Menu">
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
