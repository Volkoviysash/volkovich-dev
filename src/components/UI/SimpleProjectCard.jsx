import React from "react";
import { AiFillGithub } from "react-icons/ai";

function SimpleProjectCard({
  title,
  description,
  image,
  codeLink,
  isDarkMode,
}) {
  return (
    <div
      className={`max-w-sm border rounded-lg shadow mx-5 ${
        isDarkMode
          ? "bg-blue-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <img
        className='rounded-t-lg h-80 w-full object-cover'
        src={image}
        alt='project-screenshot'
      />
      <div className='p-5 h-80 flex flex-col justify-between'>
        <div>
          <h5
            className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 ${
              isDarkMode ? "text-white" : ""
            }`}
          >
            {title}
          </h5>
          <p
            className={`mb-3 font-normal text-gray-700 ${
              isDarkMode ? "text-gray-400" : ""
            }`}
          >
            {description}
          </p>
        </div>
        <div className='flex justify-center items-end h-full'>
          <a
            href={codeLink}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gray-900 text-white px-12 py-2 rounded-lg hover:bg-gray-700 my-2 mx-1 md:mx-0 md:my-1 flex items-center'
          >
            <AiFillGithub className='mr-2' />
            <p>Read the code</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SimpleProjectCard;
