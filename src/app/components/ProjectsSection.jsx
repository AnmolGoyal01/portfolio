"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "Portfolio website for Web Developer",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AnmolGoyal01/portfolio",
    previewUrl: "https://anmolgoyal.me/",
  },
  {
    id: 2,
    title: "Blog Application",
    description: "Blog Application With CRUD operations and Authentication",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AnmolGoyal01/Mega-Blog-Application",
    previewUrl: "https://anmolgoyal-blog.netlify.app/",
  },
  {
    id: 3,
    title: "Sticky Notes",
    description: "A simple yet useful web app for taking notes with clean and playful UI.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AnmolGoyal01/sticky-notes",
    previewUrl: "https://anmolgoyal-sticky-notes.netlify.app/",
  },
  {
    id: 4,
    title: "To-Do-App",
    description: "A basic todo app for making todos",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AnmolGoyal01/Todo-using-React-Redux-ToolKit",
    previewUrl: "https://anmolgoyal-todo.netlify.app/",
  },
  {
    id: 5,
    title: "Currency Converter",
    description: "A currency exchange rate calculator to calculate the latest exchange rates of different currencies ",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AnmolGoyal01/Currency-Converter",
    previewUrl: "https://anmolgoyal-currency-converter.netlify.app/",
  },
  {
    id: 6,
    title: "Tic-Tac-Toe",
    description: "A fun Tic-Tac-Toe Game",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AnmolGoyal01/Tic-Tac-Toe-1",
    previewUrl: "https://anmolgoyal-tic-tac-toe-game.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="sm:pt-20 pt-14">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
