import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Online Appointment',
    description: 'A healthcare appointment booking application that allows users to easily book and manage appointments online, improving accessibility and efficiency.',
    link: 'https://online-appointment-seven.vercel.app/',
  },
  {
    id: 2,
    title: 'Todolist',
    description: 'A task-saving to-do list application that helps users manage their daily tasks effectively with features like reminders and categories.',
    link: 'https://github.com/Lunarfang08/Todolist',
  },
  {
    id: 3,
    title: 'Numbuddy',
    description: 'An e-learning app designed to assist individuals with dyscalculia, offering interactive tools and resources for better understanding of mathematics.',
    link: 'https://numbuddy.vercel.app/',
  },
  {
    id: 4,
    title: 'Image Editor',
    description: 'A web-based image editor that allows users to upload, edit, and enhance their images with a variety of tools and filters.',
    link: 'https://lunarfang08.github.io/Imageprocessing.gthub.io/',
  },
  {
    id: 5,
    title: 'Portfolio',
    description: 'A personal portfolio website showcasing my projects, skills, and experiences, providing a glimpse into my work and capabilities.',
    link: 'https://arsalport.netlify.app/',
  },
  {
    id: 6,
    title: 'Realtime Chat App',
    description: 'A real-time chat application that enables users to communicate instantly with one another, featuring multiple chat rooms and user authentication.',
    link: 'https://github.com/Lunarfang08/realtimechatapp.gthub.io',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-50 p-8 md:p-12 lg:p-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 flex-grow">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-center transition duration-200 transform hover:bg-blue-700 hover:scale-105">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
