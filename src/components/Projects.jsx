import React, { useState } from 'react';

function Project({ title, description, features, projectLink, codeLink }) {
  const [showProject, setShowProject] = useState(false);

  const toggleProject = () => {
    setShowProject(!showProject);
  };

  return (
    <div className="max-w-lg w-full rounded overflow-hidden shadow-lg bg-white mx-4 mb-8">
      <div className="px-6 py-4">
        <div>
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
          <h3 className="font-bold text-lg mt-4">Features</h3>
          <ul className="list-disc list-inside text-gray-700">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={toggleProject}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded transition duration-300 ease-in-out"
        >
          {showProject ? "Hide Project" : "Use Here ?"}
        </button>
      </div>
      <div className={`px-6 py-4 ${showProject ? 'block' : 'hidden'}`}>
        <iframe src={projectLink} className="w-full h-64 rounded-lg overflow-hidden" title={title}></iframe>
      </div>
      <div className="px-6 py-4 text-center">
        <a href={projectLink} className={`text-blue-500 hover:underline`}>View Project</a>
        <a href={codeLink} className={`text-blue-500 hover:underline ml-4`}>Code</a>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Project 1: Weather App",
      description: "This project is a simple Weather App built using HTML, CSS, and JavaScript. It allows users to check the weather of any city by entering its name in the input field.",
      features: [
        "Users can enter the name of a city in the input field to get its weather information.",
        "The app displays the city name, country, weather description, temperature in Celsius, and humidity.",
        "Weather icons change based on the current weather conditions.",
        "Responsive design: The app is optimized for various screen sizes."
      ],
      projectLink: "https://know-weather-status.netlify.app/",
      codeLink: "https://github.com/namanuppal/Basic-Weather-App"
    },
    {
      title: "Project 2: CRUD To-Do List App",
      description: "This is a simple To-Do List application built using React. It allows users to add, edit, complete, and delete tasks.",
      features: [
        "Add new tasks",
        "Mark task as complete",
        "Edit existing tasks",
        "Delete tasks"
      ],
      projectLink: "https://add-todolist-here.netlify.app/",
      codeLink: "https://github.com/namanuppal/Add-To-DO"
    }
  ];

  return (
    <div className='container mx-auto mt-10 flex overflow-x-auto justify-evenly'>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
