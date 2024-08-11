import React, {useContext} from 'react';
// import projectsData from './projectData';
import {getProjectContext} from '../../context/request.context'

const Projects = () => {
  const {data, loading, error} = useContext(getProjectContext)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return (
    <section id="projects" className="p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-500 hover:text-blue-700 transition-colors">View More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
