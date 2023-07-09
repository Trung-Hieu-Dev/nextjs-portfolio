import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profileImg } from "@/public/assets";

const technologies = [
  "HTML5",
  "CSS, SCS",
  "TailwindCSS",
  "Javascript (ES6+)",
  "Typescript",
  "VueJS 3",
  "Element Plus Component",
  "Git",
];

const courses = [
  "ReactJS",
  "NextJS",
  "Angular",
  "Photoshop",
  "SEO",
  "Java",
  "Spring Boot",
  "PHP",
];

const About = () => {
  return (
    <section
      id="about"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello, I am Dang Trung Hieu and I love being creative with
            everything on the internet. My passion for web programming started
            when I worked in Digital Marketing at Moa Vietnam company. At that
            time, I decided to try editing custom Flatsome themes for
            Advertising operations and SEO on Google. This taught me a lot about
            HTML & CSS!
          </p>
          <p>
            In 2021, I decided to join a 2.5-year Software Engineer course to
            gain in-depth knowledge about programming and pursue my passion of
            becoming a true programmer. I have completed the course and
            graduated in May 2023.
          </p>
          <p>
            From <span className="text-textGreen">05/2022 - 01/2023,</span> I
            worked as an{" "}
            <span className="text-textGreen">
              JUNIOR FRONT-END WEB DEVELOPER{" "}
            </span>
            for LTV Software Co., Ltd{" "}
          </p>
          <p>
            Here are a few technologies I have been used in more than 03
            projects at LTV Company:
          </p>
          {/* Experiences List  */}
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            {technologies.map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <span>
                  <AiFillThunderbolt />
                </span>
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Below are the technologies I have learned to get an opportunity to
            become Frontend Web Developer:
          </p>
          {/* Course List  */}
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            {courses.map((course) => (
              <li key={course} className="flex items-center gap-2">
                <span>
                  <AiFillThunderbolt />
                </span>
                {course}
              </li>
            ))}
          </ul>
        </div>
        {/* Profile  */}
        <div className="w-full lgl:w-1/3 h-80 relative group">
          {/* profile image  */}
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                src={profileImg}
                alt="profile image"
                className="rounded-lg h-full object-cover"
              />
              <div
                className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0
            group-hover:bg-transparent duration-300"
              ></div>
            </div>
          </div>
          {/* profile outline  */}
          <div
            className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md
              group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
