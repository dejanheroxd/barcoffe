import { AnimatePresence, easeIn, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [animateBurger, setAnimteBurger] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(true);

  function navToggle() {
    setNavOpen(!navOpen);
    setAnimteBurger(!animateBurger);
    if (!navOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }

  function deactivateNav() {
    if (window.innerWidth > 640) {
      setShowBurgerMenu(false);
    }
  }

  function activateNav() {
    if (innerWidth > 640) {
      setNavOpen(true);
    }
  }

  useEffect(() => {
    const isLargeScreen = window.matchMedia("(max-width: 640px)");

    const handleResize = () => {
      if (isLargeScreen.matches) {
        setShowBurgerMenu(true);
      } else {
        deactivateNav(false);
      }
    };

    handleResize();

    isLargeScreen.addEventListener("change", handleResize);

    return () => {
      isLargeScreen.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(() => {
    const isLargeScreen = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      if (isLargeScreen.matches) {
        setNavOpen(true);
      } else {
        setNavOpen(false);
      }
    };

    handleResize();

    isLargeScreen.addEventListener("change", handleResize);

    return () => {
      isLargeScreen.removeEventListener("change", handleResize);
    };
  }, []);

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
      {showBurgerMenu && (
        <div
          onClick={() => {
            navToggle();
          }}
          className="fixed left-6 top-[26px] z-30 flex cursor-pointer flex-col gap-[6px]"
        >
          <motion.div
            variants={burger1Vars}
            initial="initial"
            animate={animateBurger ? "animate" : "initial"}
            exit="exit"
            className="h-[2px] w-6 bg-white"
          ></motion.div>
          <motion.div
            variants={burger2Vars}
            initial="initial"
            animate={animateBurger ? "animate" : "initial"}
            exit="exit"
            className="h-[2px] w-6 bg-white"
          ></motion.div>
          <motion.div
            variants={burger3Vars}
            initial="initial"
            animate={animateBurger ? "animate" : "initial"}
            exit="exit"
            className="h-[2px] w-6 bg-white"
          ></motion.div>
        </div>
      )}
      <AnimatePresence>
        {navOpen && (
          <motion.nav
            variants={navVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="lg:justufy-center fixed top-0 z-10 flex h-screen w-full origin-top flex-col items-center justify-center bg-primary lg:absolute lg:top-2 lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:bg-transparent lg:pl-10 xl:pl-20 2xl:top-5"
          >
            <ul className="flex flex-col gap-5 text-center text-2xl text-white lg:flex-row 2xl:gap-9">
              <li>
                <a href="#section1">Home</a>
              </li>

              <li>
                <a href="#section2">Abou</a>t
              </li>

              <li>
                <a href="#section3">Menu</a>
              </li>

              <li>
                <a href="#section4">Gallery</a>
              </li>
            </ul>
            <p className="hidden text-3xl font-extrabold text-white sm:text-4xl md:mt-2 lg:block lg:pr-40 2xl:text-5xl">
              MOONSHINE BAY
            </p>
            <p className="2xl:textxl hidden text-xl text-white md:mt-2 lg:block lg:pr-10 xl:pr-20 2xl:tracking-wide">
              1-555-555-1212
            </p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
