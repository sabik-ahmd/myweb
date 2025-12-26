// src/components/Projects.jsx
import React from "react";

// Project Images
import retroBellaImg from "../assets/projects/retrobella.png";
import textUtilsImg from "../assets/projects/text.png";
import jobPortalImg from "../assets/projects/job.png";
import examImg from "../assets/projects/exam.jpeg";
import microtechImg from "../assets/projects/microtech.png";
import pixelFramesImg from "../assets/projects/pixelframes.png";
import portfolioImg from "../assets/projects/portfolio.png";

export default function Projects() {
  const projects = [
    // ⭐ FEATURED PROJECT
    {
      title: "RetroBella (Featured)",
      image: retroBellaImg,
      featured: true,
      description:
        "RetroBella is a modern e-commerce fashion website built with React and Vite. It features product listings, responsive UI, clean component architecture, and smooth user experience.",
      github: "https://github.com/sabik-ahmd/retro-bella-frontend",
      live: "https://retrobella.netlify.app"
    },

    {
      title: "MicroTech Web",
      image: microtechImg,
      description:
        "Mobile repair service website built with React showcasing services, gallery, projects, and contact form.",
      github: "https://github.com/sabik-ahmd/microtech.git",
      live: "https://microtech1.netlify.app/"
    },
    {
      title: "Pixel Frames",
      image: pixelFramesImg,
      description:
        "A full-stack wedding and event photography portfolio website with client galleries and media management.",
      github: "https://github.com/sabik-ahmd/pixel-frames",
      live: "https://pixelframes.netlify.app"
    },
    {
      title: "Portfolio Website",
      image: portfolioImg,
      description:
        "Interactive personal portfolio showcasing projects, skills, and certifications with responsive design.",
      github: "https://github.com/sabik-ahmd/portfolio",
      live: "https://saabik.netlify.app"
    },
    {
      title: "TextUtils Web App",
      image: textUtilsImg,
      description:
        "ReactJS app for advanced text manipulation including case conversion and productivity tools.",
      github: "https://github.com/sabik-ahmd/textutils.git",
      live: "https://text-check.netlify.app/"
    },
    {
      title: "Part-Time Job Portal",
      image: jobPortalImg,
      description:
        "Full-stack React platform connecting students with recruiters through a simple job search and apply flow.",
      github: "https://github.com/sabik-ahmd/job-portal",
      live: "#"
    },
    {
      title: "Online Exam Proctoring System",
      image: examImg,
      description:
        "Django-based online exam proctoring system using computer vision and ML to detect cheating behavior.",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-12 text-center">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`glass-card p-4 flex flex-col gap-4 shadow-2xl transition-transform duration-300
              ${
                project.featured
                  ? "lg:col-span-2 border-2 border-pink-400 scale-[1.02]"
                  : "hover:scale-105"
              }
            `}
          >
            {project.featured && (
              <span className="self-start px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-black">
                ⭐ Featured Project
              </span>
            )}

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-44 sm:h-52 object-cover rounded-lg"
            />

            <h3 className="text-xl font-semibold text-indigo-300">
              {project.title}
            </h3>

            <p className="text-gray-200 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 text-black font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-center hover:scale-105 transition-transform"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 text-gray-100 font-semibold rounded-lg bg-white/20 border border-white/30 text-center hover:scale-105 transition-transform"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

