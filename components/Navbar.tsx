import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { logo } from "@/public/assets";

const navLinks = ["home", "about", "experience", "projects", "contact"];

const Navbar = () => {
  // handle scroll into view
  const ref = useRef<string | any>("");

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const href = event.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({
      behavior: "smooth",
    });

    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  };

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={logo} alt="logo" priority className="w-14" />
        </motion.div>
        {/* Desktop Menu */}
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[16px] gap-7">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={"#" + item}
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer
              duration-300 nav-link capitalize"
                onClick={handleScroll}
              >
                {index >= 1 ? (
                  <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.1 * index }}
                  >
                    <span className="text-textGreen">0{index}.</span>
                    {item}
                  </motion.li>
                ) : (
                  <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.1 * index }}
                  >
                    {item}
                  </motion.li>
                )}
              </Link>
            ))}
          </ul>
          <a href="/assets/Dang_Trung_Hieu_Front_End_cv.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor
              duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Mobile Menu Icon */}
        <div
          className="w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl text-textGreen
        cursor-pointer overflow-hidden group"
        >
          <span
            className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all
          ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0
          transition-all ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3
          transition-all ease-in-out duration-300"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
