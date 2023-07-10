import React from "react";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import SectionTitle from "@/components/SectionTitle";

// images
import {
  nextjsBlogImg,
  nextjsPortfolioImg,
  vuejsMusicPlayerImg,
} from "@/public/assets";

const projects = [
  {
    id: "prj-1",
    title: "Player Music",
    description:
      "A Player music website for posting and listening to music. Users can post their comments also. Multiple languages using Vue I18n.",
    img: vuejsMusicPlayerImg,
    tech: [
      "VueJS 3",
      "Vue Router",
      "Pinia",
      "Vee Validate",
      "TailwindCSS",
      "Firebase",
    ],
    githubUrl: "https://github.com/Trung-Hieu-Dev/vue-music-app",
    deployUrl: "https://music-store-kappa.vercel.app",
  },
  {
    id: "prj-2",
    title: "NextJS Blog",
    description:
      "NextJS Blog built by NextJS 13 and React. The blog contents were loaded from Markdown files.",
    img: nextjsBlogImg,
    tech: [
      "NextJS",
      "React",
      "MongoDB",
      "ReactMarkdown",
      "SCSS",
      "Vercel Deployment",
    ],
    githubUrl: "https://github.com/Trung-Hieu-Dev/nextjs-personal-blog",
    deployUrl: "https://nextjs-personal-blog-ten.vercel.app/",
  },
  {
    id: "prj-3",
    title: "NextJS Portfolio",
    description:
      "The Portfolio was built by NextJS. I was trying to make it as clean as possible",
    img: nextjsPortfolioImg,
    tech: [
      "NextJS",
      "ReactJS",
      "Tailwind CSS",
      "Farmer Motion",
      "Vercel Deployment",
    ],
    githubUrl: "https://github.com/Trung-Hieu-Dev/nextjs-portfolio",
    deployUrl: "https://nextjs-portfolio-taupe-phi.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <SectionTitle title="Some Things I have Built" titleNo="04" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {/* project1 */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col ${
              index % 2 == 0 ? "xl:flex-row" : "xl:flex-row-reverse"
            } gap-6`}
          >
            {/* image section */}
            <a
              href={project.deployUrl}
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  src={project.img}
                  alt="vuejs 3 project"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            {/* detail section*/}
            <div
              className={`w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right ${
                index % 2 == 0 ? "xl:-ml-16" : ""
              } z-10`}
            >
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Personal project
              </p>
              {/* title */}
              <h3 className="text-2xl font-bold">{project.title}</h3>
              {/* description */}
              <p
                className={`bg-[#112240] text-sm md:text-base p-2 md:p-6 ${
                  index % 2 != 0 ? " xl:-mr-16" : ""
                }  rounded-md`}
              >
                {project.description}{" "}
                <span>
                  Please check my github to see more technologies which used for
                  this projects.
                </span>
              </p>

              {/* tech */}
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {/* links */}
              <div className="text-2xl flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href={project.deployUrl}
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
