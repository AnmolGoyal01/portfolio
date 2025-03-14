"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>MongoDB</li>
        <li>Express JS</li>
        <li>React JS</li>
        <li>Node JS</li>
        <li>Next JS</li>
        <li>MySql, PostgreSql</li>
        <li>JavaScript</li>
        <li>Typescript</li>
        <li>C/C++</li>
        <li>Python</li>
        <li>Devops</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
      <li>
         Backend Developer at <a href="https://www.linkedin.com/company/genwiseofficial" target="_blank" className="text-blue-500">Genwise</a>, working on building and optimizing microservices using Java Spring Boot.
      </li>
      <li>
         Software Developer Intern at <a href="https://www.linkedin.com/showcase/turiasoftware/" target="_blank" className="text-blue-500">Turia</a> where I worked on development of web applications using React and Node JS.
      </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <p className=" ">
        I am currently pursuing Bachelors of Technology in Electrical Engineering from Delhi Technological University.
      </p>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white sm:pt-20 pt-10" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16  xl:px-16">
        <Image src="/images/about-image.png" alt="desktop image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with React, JavaScript, Redux Toolkit, Tailwind, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experiences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
