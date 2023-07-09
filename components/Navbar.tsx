import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { logo } from "@/public/assets";
import CustomIcon from "@/components/UI/CustomIcon";

// icons import
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";

const navLinks = ["home", "about", "experience", "projects", "contact"];

const Navbar = () => {
  // handle mobile menu
  const ref = useRef<string | any>("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setShowMobileMenu(true);
  };

  // handle scroll into view
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

  // navbar content
  const navbarContent = (
    <>
      {" "}
      <ul
        className={`${
          showMobileMenu ? "flex-col text-base" : "text-[16px]"
        } flex gap-7`}
      >
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
          className={`${
            showMobileMenu ? "w-32" : ""
          } px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor
              duration-300`}
        >
          Resume
        </motion.button>
      </a>
    </>
  );

  // icons list content
  const iconsListContent = (
    <div className="flex gap-4">
      <CustomIcon link="https://github.com/Trung-Hieu-Dev ">
        <TbBrandGithub />
      </CustomIcon>
      <CustomIcon link="https://www.linkedin.com/in/dang-hieu-282529b1">
        <SlSocialLinkedin />
      </CustomIcon>
      <CustomIcon link="https://www.facebook.com/DangTrungHieu0510">
        <SlSocialFacebook />
      </CustomIcon>
      <CustomIcon link="#">
        <SlSocialYoutube />
      </CustomIcon>
      <CustomIcon link="#">
        <SlSocialInstagram />
      </CustomIcon>
    </div>
  );

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
          {navbarContent}
        </div>
        {/* Mobile Menu Icon */}
        <div
          className="w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl text-textGreen
        cursor-pointer overflow-hidden group"
          onClick={() => setShowMobileMenu(true)}
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
        {/*  show mobile menu */}
        {showMobileMenu && (
          <div
            ref={(node) => (ref.current = node)}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
            onClick={() => setShowMobileMenu(false)}
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, ease: "easeIn" }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4
            py-10 relative"
            >
              <MdOutlineClose
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4
              right-4"
                onClick={() => setShowMobileMenu(false)}
              />
              <div className="flex flex-col items-center gap-7">
                {/* menu list */}
                {navbarContent}
                {/*  social icons list*/}
                {iconsListContent}
              </div>
              {/* contact me */}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="text-sm w-72 tracking-widest text-textGreen text-center mt-4"
                href="mailto:dangtrunghieusg@gmail.com"
              >
                <p>dangtrunghieusg@gmail.com</p>
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
