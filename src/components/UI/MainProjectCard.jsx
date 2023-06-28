import React from "react";

function MainProjectCard({ index, project }) {
  return (
    <div
      className='rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row'
      key={index}
    >
      {/* Display the image on top for small screens */}
      <div className='w-500 h-445 md:w-2/3 flex justify-center align-middle'>
        {project.images.map((image) => (
          <img src={project.image} alt={project.title} />
        ))}
      </div>
      <div className='p-4 w-full md:w-1/3'>
        <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
        <p className='text-gray-700 text-base mb-4'>{project.description}</p>
        <div className='flex flex-col md:justify-between md:flex-row '>
          <a
            href={project.codeLink}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 my-1 md:mx-1'
          >
            Read the code
          </a>
          <a
            href={project.liveLink}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 my-1 md:mx-1'
          >
            Visit website
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainProjectCard;
