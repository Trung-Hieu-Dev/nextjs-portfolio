import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const jobDetails = [
  "After graduating from the Maritime University, I worked for Vietnamese state-owned shipping companies including Falcon Shipping and PVTrans Shipping as a Marine Engineer.",
  "My responsibilities included operating and repairing various systems such as the electrical control system, oil filtration system, and power generation system.",
  "In 2013, I resigned from my job in the maritime industry to work on land and take care of my parents, as I am their only child.",
];

const OverseaCompany = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Marine Diesel Engineer
        <span className="text-textGreen tracking-wide">
          @Working Over Sea On Motor Vessels
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        10/2009 - 06/2013
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

export default OverseaCompany;
