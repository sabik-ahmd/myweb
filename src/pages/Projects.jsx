// src/components/Projects.jsx
import React from "react";

// Import images from src/assets/projects
// Make sure these files exist in src/assets/projects/
import textUtilsImg from "../assets/projects/text.png";
import jobPortalImg from "../assets/projects/job.png";
import examImg from "../assets/projects/exam.jpeg";
// For MicroTech, Pixel Frames, Portfolio, you can import later when available
import microtechImg from "../assets/projects/microtech.png";
import pixelFramesImg from "../assets/projects/pixelframes.png";
import portfolioImg from "../assets/projects/portfolio.png";

export default function Projects() {
  const projects = [
    {
      title: "MicroTech Web",
      image: microtechImg, 
      description: "Mobile repair service website built with React showcasing services, gallery,explainig projects and contact form.",
      github: "https://github.com/sabik-ahmd/microtech.git",
      live: "https://microtech1.netlify.app/"
    },
    {
      title: "Pixel Frames",
      image: pixelFramesImg, 
      description: "A full-stack wedding and event photography portfolio website with client galleries and media management.",
      github: "https://github.com/sabik-ahmd/pixel-frames",
      live: "https://pixelframes.netlify.app"
    },
    {
      title: "Portfolio Website",
      image: portfolioImg, 
      description: "Interactive personal portfolio showcasing projects, skills, and certifications, optimized for responsiveness.",
      github: "https://github.com/sabik-ahmd/portfolio",
      live: "https://saabik.netlify.app"
    },
    {
      title: "TextUtils Web App",
      image: textUtilsImg,
      description: "TextUtils is a ReactJS website for efficiently manipulating text. It offers advanced features like case conversion and other tools, making it more powerful than basic text editors.",
      github: "https://github.com/sabik-ahmd/textutils.git",
      live: "https://text-check.netlify.app/"
    },
    {
      title: "Part-Time Job Portal",
      image: jobPortalImg,
      description: "Part-Time Job Portal is a full-stack React platform connecting college students with recruiters. It streamlines job searches and applications through an intuitive, user-friendly interface.",
      github: "https://github.com/sabik-ahmd/job-portal",
      live: "#"
    },
    {
      title: "Online Exam Proctoring System",
      image: examImg,
      description:"Built an online exam proctoring system using Django with computer vision and ML to detect cheating, providing monitoring and detailed student behavior reports.",
      github: "#",
      live: "#"
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-12 text-center">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glass-card p-4 flex flex-col gap-4 shadow-2xl hover:scale-105 transition-transform duration-300">
            {/* Only render image if available */}
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300">
                No Image
              </div>
            )}

            <h3 className="text-xl font-semibold text-indigo-300">{project.title}</h3>
            <p className="text-gray-200 text-sm">{project.description}</p>
            <div className="flex gap-4 mt-2">
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
