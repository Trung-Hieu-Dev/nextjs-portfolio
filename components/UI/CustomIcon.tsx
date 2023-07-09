import React from "react";

interface Props {
  link: string;
  children: any;
}

const CustomIcon = ({ link, children }: Props) => {
  return (
    <a href={link} target="_blank">
      <span
        className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
          hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
      >
        {children}
      </span>
    </a>
  );
};

export default CustomIcon;
