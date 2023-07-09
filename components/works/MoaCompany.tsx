import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import Link from "next/link";

const jobDetails = [
  "Develop long- and short-term SEO and Social (Face Book Ads) strategies.",
  "Oversee or manage pay-per-click (PPC) campaigns with search engine marketing (SEM) strategists.",
  "Collaborate and oversee to produce compelling and high-quality website content, including blog posts, page descriptions, sub-website.",
  "Work closely with Web master and IT team to employ customer experience and conversion rate optimisation methods to turn visitors into more active users/lead and to help improve website performance.",
  "Collaborate with others within the marketing department (as social media team, PR) to align and manage SEO strategy, content website and other digital channels.",
  "Analyzes campaign performance and recommends solutions for performance optimization daily.",
  "Track key performance indicators (KPIs) weekly, report rankings, and recommend tactics to optimize.",
];

const MoaCompany = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        DIGITAL MARKETING SENIOR SPECIALIST
        <span className="text-textGreen tracking-wide">@MOA Việt Nam</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        06/2018 - 12/2019
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
      <p className="text-base flex gap-2 text-textDark mt-3">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        Click here for more information:
        <Link href="https://moavn.com" target="_blank">
          <span className="text-textGreen">Moa Việt Nam</span>
        </Link>
      </p>
    </motion.div>
  );
};

export default MoaCompany;
