import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

function MainProjectCard({ index, project, isDarkMode }) {
  return (
    <div
      className={`rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row align-middle my-10 md:h-96 ${
        isDarkMode ? "bg-blue-gray-800 text-gray-300" : ""
      }`}
      key={index}
    >
      {/* Display the image on top for small screens */}
      <div className='w-600 md:w-3/4'>
        <Carousel
          className='rounded-xl'
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant='text'
              color='teal'
              size='lg'
              onClick={handlePrev}
              className='!absolute top-2/4 -translate-y-2/4 left-4'
            >
              <ArrowLeftIcon strokeWidth={2} className='w-6 h-6' />
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant='text'
              color='teal'
              size='lg'
              onClick={handleNext}
              className='!absolute top-2/4 -translate-y-2/4 !right-4'
            >
              <ArrowRightIcon strokeWidth={2} className='w-6 h-6' />
            </IconButton>
          )}
        >
          {project.images.map((image) => (
            <img
              key={image}
              src={image}
              alt='project screen'
              className='h-full w-full object-cover'
            />
          ))}
        </Carousel>
      </div>
      <div className='p-4 w-full md:w-1/3'>
        <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
        <p
          className={`text-gray-700 text-base mb-4 ${
            isDarkMode ? " text-gray-400" : ""
          }`}
        >
          {project.description}
        </p>
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
