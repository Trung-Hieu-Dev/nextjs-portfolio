import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  title: string;
  description: string;
  tech: string[];
  link: string;
  target: string | undefined;
  task: string;
}

const ArchiveCard = ({
  title,
  description,
  tech,
  link,
  task,
  target = "_blank",
}: Props) => {
  return (
    <a href={link} target={target}>
      <div
        className="w-full h-86 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2
     transition-transform duration-300 group"
      >
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textGreen" />
          <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {title}
          </h2>
          <p className="text-sm mt-3">{description}</p>
          <p className="text-sm mt-3">
            <span className="text-textGreen">My Task:</span> {task}
          </p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {tech.map((item: any) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
