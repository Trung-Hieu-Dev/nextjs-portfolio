import React, { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import LtvCompany from "@/components/works/LtvCompany";
import MoaCompany from "@/components/works/MoaCompany";
import OverseaCompany from "@/components/works/OverseaComapany";

const Experience = () => {
  const [showCompany1, setShowCompany1] = useState(true);
  const [showCompany2, setShowCompany2] = useState(false);
  const [showCompany3, setShowCompany3] = useState(false);
  const handleCompany1 = () => {
    setShowCompany1(true);
    setShowCompany2(false);
    setShowCompany3(false);
  };

  const handleCompany2 = () => {
    setShowCompany1(false);
    setShowCompany2(true);
    setShowCompany3(false);
  };

  const handleCompany3 = () => {
    setShowCompany1(false);
    setShowCompany2(false);
    setShowCompany3(true);
  };

  const companies = [
    {
      name: "LTV Software Co., Ltd",
      handler: handleCompany1,
      activeClass: showCompany1,
    },
    {
      name: "MOA Việt Nam",
      handler: handleCompany2,
      activeClass: showCompany2,
    },
    {
      name: "OverSea Shipping",
      handler: handleCompany3,
      activeClass: showCompany3,
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="03" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        {/* Company  */}
        <ul className="md:w-32 flex flex-col">
          {companies.map((company) => (
            <li
              key={company.name}
              className={`${
                company.activeClass
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-textDark text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              onClick={company.handler}
            >
              {company.name}
            </li>
          ))}
        </ul>
        {showCompany1 && <LtvCompany />}
        {showCompany2 && <MoaCompany />}
        {showCompany3 && <OverseaCompany />}
      </div>
    </section>
  );
};

export default Experience;
