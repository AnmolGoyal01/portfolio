"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "Portfolio website for Full Stack Web Developer.",
    image: "/images/projects/1.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/AnmolGoyal01/portfolio",
    previewUrl: "https://anmolgoyal.me/",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    title: "Blog Application",
    description: "Blog Application With CRUD operations and Authentication using Backend as a service from Appwrite.",
    image: "/images/projects/2.png",
    tag: ["All","Frontend"],
    gitUrl: "https://github.com/AnmolGoyal01/Mega-Blog-Application",
    previewUrl: "https://anmolgoyal-blog.netlify.app/",
    stack : ["React.js", "Redux", "Appwrite"],
  },
  {
    id: 3,
    title: "Social Media Backend",
    description: "Backend of a social media application with CRUD operations and complex mongodb aggregation pipelines.",
    image: "/images/projects/7.jpg",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/AnmolGoyal01/social-media-backend",
    stack : ["Node.js", "Express.js", "Mongoose"],
  },
  {
    id: 4,
    title: "To-Do-App",
    description: "A basic todo app for making todos supporting CRUD operations on Todos and using local storage to save the todos.",
    image: "/images/projects/4.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/AnmolGoyal01/Todo-using-React-Redux-ToolKit",
    previewUrl: "https://anmolgoyal-todo.netlify.app/",
    stack : ["React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 5,
    title: "Youtube Backend",
    description: "Scalable backend of a youtube like video platform with complex mongodb aggregation pipelines with crud operations on videos.",
    image: "/images/projects/8.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/AnmolGoyal01/Video-Tube-Backend",
    stack : ["Node.js", "Express.js", "Mongoose"],
  },
  {
    id: 6,
    title: "Sticky Notes",
    description: "A simple yet useful web app for taking notes with clean and playful UI supporting local storage in browser.",
    image: "/images/projects/3.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/AnmolGoyal01/sticky-notes",
    previewUrl: "https://anmolgoyal-sticky-notes.netlify.app/",
    stack : ["React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 7,
    title: "Currency Converter",
    description: "A currency exchange rate calculator to calculate the latest exchange rates of different currencies ",
    image: "/images/projects/5.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/AnmolGoyal01/Currency-Converter",
    previewUrl: "https://anmolgoyal-currency-converter.netlify.app/",
    stack : ["HTML", "Javascript", "Fetch Api"],
  },
  {
    id: 8,
    title: "Tic-Tac-Toe",
    description: "A fun Tic-Tac-Toe Game",
    image: "/images/projects/6.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/AnmolGoyal01/Tic-Tac-Toe-1",
    previewUrl: "https://anmolgoyal-tic-tac-toe-game.netlify.app/",
    stack : ["HTML", "CSS", "Javascript"],
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
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
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
              tags = {project.stack}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
