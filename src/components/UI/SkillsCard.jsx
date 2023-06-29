import React from "react";

const SkillsCard = ({ image, title, skills, isDarkMode }) => (
  <div
    className={`group relative text-center shadow-xl p-10 m-10 rounded-xl my-10 md:m-0 md:w-1/3  transform transition-all hover:scale-105 ${
      isDarkMode
        ? "bg-blue-gray-400 text-gray-200 hover:bg-teal-200"
        : "bg-gray-100 hover:bg-teal-50"
    }`}
  >
    <img
      src={image}
      alt='skill'
      width={100}
      height={100}
      className='mx-auto mb-6'
    />
    <h3 className='text-2xl font-bold mt-6 text-gray-800 h-16 flex items-center justify-center'>
      {title}
    </h3>
    <hr className='mx-auto mt-3 border-gray-400' />
    <ul className='mt-6 space-y-2 text-gray-800 font-medium flex flex-col'>
      {skills.map((skill, index) => (
        <span
          key={skill}
          className='bg-gray-300 rounded-full px-4 py-2 text-sm font-semibold mr-2'
        >
          {skill}
        </span>
      ))}
    </ul>
  </div>
);

export default SkillsCard;
