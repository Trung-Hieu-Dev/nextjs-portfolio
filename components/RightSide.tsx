import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-24 text-textLight">
      <a href="mailto:dangtrunghieusg@gmail.com">
        <p className="text-sm rotate-90 tracking-wide w-72 text-textGreen">
          dangtrunghieusg@gmail.com
        </p>
      </a>
      {/* line  */}
      <span className="w-[2px] h-32 bg-textDark"></span>
    </div>
  );
};

export default RightSide;
