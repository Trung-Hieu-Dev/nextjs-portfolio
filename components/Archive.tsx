import React, { useState } from "react";
import { motion } from "framer-motion";

import ArchiveCard from "@/components/ArchiveCard";

const projects = [
  {
    id: "prj-1",
    title: "The Fancy Dashboard",
    description:
      "Vue.js 3 and Tailwind CSS were used to build this project, which provides \n" +
      "a collection of components to help developers build web applications quickly, similar to MUI.\n" +
      "I've been involved with this project since its inception and worked with a team.\n",
    tech: ["VueJS3", "Tailwind CSS", "Vite"],
    link: "https://argon-dashboard-vue3.web.app",
    task: "Frontend Development",
  },
  {
    id: "prj-2",
    title: "Sean Theme Dashboard",
    description:
      "This project was built with Vue.js 3 and Tailwind CSS. It provides a collection of components similar to\n" +
      "MUI that help developers build web applications faster. In this project, I am responsible for maintaining \n" +
      "the UI under the leadership of the assigned team. \n",
    tech: ["VueJS3", "Tailwind CSS", "Vite"],
    link: "https://seantheme.com/hud-vue/ui/bootstrap",
    task: "Frontend Maintenance",
  },
  {
    id: "prj-3",
    title: "Kilimo Web App",
    description:
      "This website specializes in providing fertilizers for farmers.\n" +
      "The backend of the website was built using Laravel, while the frontend uses VueJS 3. \n" +
      "I participated in this project as a frontend maintenance role for 01 month.\n",
    tech: ["VueJS3", "Laravel", "Flutter"],
    link: "https://kilimo.vn",
    task: "Frontend Maintenance",
  },
  {
    id: "prj4",
    title: "I hope I could get a job to fill out this section.",
    description:
      "This section's content will be continuously updated in the future whenever I have gotten a new job. \n" +
      "I wish to be a Front-end Developer at the beginning of my career, and for that reason, \n" +
      "I always keep learning and practicing all Front-end Frameworks listed below!",
    tech: ["VueJS", "ReactJS", "Angular", "Flutter"],
    link: "#about",
    target: "",
    task: "Frontend Developer",
  },
];

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  // @ts-ignore
  return (
    <section className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          All Projects Participated In The Previous Company
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {projects.slice(0, 3).map((project) => (
          <ArchiveCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
            task={project.task}
            target={project.target}
          />
        ))}
        {showMore && (
          <>
            {projects.slice(3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <ArchiveCard
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  link={project.link}
                  task={project.task}
                  target={project.target}
                />
              </motion.div>
            ))}
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor
        duration-300"
            onClick={() => setShowMore(false)}
          >
            Show Less
          </button>
        ) : (
          <button
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor
        duration-300"
            onClick={() => setShowMore(true)}
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default Archive;
