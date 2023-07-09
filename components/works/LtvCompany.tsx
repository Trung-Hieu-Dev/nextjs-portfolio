import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const jobDetails = [
  "Working together with the team members to build a Material Template Project using VueJS.",
  "Write a usage guide for project using Markdown and VueJS.",
  "Work with a variety of different languages, platforms, frameworks, and content management systems such as HTML, SCSS, Tailwind CSS, VueJS 3, Element Plus, Typescript.",
  "My responsibilities: Development, Bug fixing.",
];

const LtvCompany = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        FRONT-END WEB DEVELOPER
        <span className="text-textGreen tracking-wide">
          @LTV Software Co., Ltd
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        05/2022 - 01/2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        {jobDetails.map((item) => (
          <li key={item} className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default LtvCompany;
