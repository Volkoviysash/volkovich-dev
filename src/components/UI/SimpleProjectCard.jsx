import React from "react";
import { AiFillGithub } from "react-icons/ai";

function SimpleProjectCard({ title, description, image, codeLink }) {
  return (
    <section className='bg-white rounded-lg shadow-md p-6 m-4 w-96 transform transition-all'>
      <h3 className='text-2xl font-semibold mb-4'>{title}</h3>
      <div>
        <img
          src={image}
          alt='project-screenshot'
          className='w-full h-auto rounded-lg'
        />
        <p className='text-gray-600 mt-4 mb-2'>{description}</p>
        <div className='flex justify-center'>
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
    </section>
  );
}

export default SimpleProjectCard;
