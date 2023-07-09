import React from "react";

// icons import
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <div className="flex flex-row gap-4">
        <a href="https://github.com/Trung-Hieu-Dev  " target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
          hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <TbBrandGithub />
          </span>
        </a>
        <a href="#">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
          hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialYoutube />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/dang-hieu-282529b1/"
          target="_blank"
        >
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
          hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://www.facebook.com/DangTrungHieu0510 " target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
          hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialFacebook />
          </span>
        </a>
        <a href="#">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
          hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialInstagram />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
