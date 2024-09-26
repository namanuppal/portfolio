import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, features, projectLink, codeLink, image }) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-400">
      <img src={image} alt={`${title} project thumbnail`} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-gray-800 mb-4">{description}</p>
        <h4 className="font-bold text-lg mt-4 text-black">Features</h4>
        <ul className="list-disc list-inside text-gray-800 mb-4">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="flex justify-between">
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 focus:outline-none focus:underline"
          >
            <FaGithub className="mr-2" />
            Code
          </a>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-600 hover:text-green-800 focus:outline-none focus:underline"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};



const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "This project is a simple Weather App that allows users to check the weather of any city.",
      features: [
        "Enter city name to get weather information.",
        "Displays weather description, temperature, and humidity.",
        "Responsive design optimized for various screen sizes."
      ],
      projectLink: "https://know-weather-status.netlify.app/",
      codeLink: "https://github.com/namanuppal/Basic-Weather-App",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "CRUD To-Do List App",
      description: "A simple To-Do List application built with React that allows task management.",
      features: [
        "Add new tasks.",
        "Mark tasks as complete.",
        "Edit and delete tasks."
      ],
      projectLink: "https://add-todolist-here.netlify.app/",
      codeLink: "https://github.com/namanuppal/Add-To-DO",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
