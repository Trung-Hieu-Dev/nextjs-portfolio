import React from "react";

// icons import
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import CustomIcon from "@/components/UI/CustomIcon";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <div className="flex flex-row gap-4">
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
    </div>
  );
};

export default Footer;
