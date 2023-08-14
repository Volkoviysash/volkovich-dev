import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar({ handleThemeToggle }) {
  return (
    <nav className='p-10 mb-12 flex justify-between'>
      <h1 className='text-xl font-burtons font-bold'>volkovich.dev</h1>
      <ul className='flex items-center'>
        <li className='px-4'>
          <BsFillMoonStarsFill
            className='cursor-pointer text-xl hover:text-gray-400'
            onClick={handleThemeToggle}
          />
        </li>
        <li className='hidden md:block px-4 font-bold cursor-pointer transition-transform hover:translate-y-1'>
          <a href='#home'>Home</a>
        </li>
        <li className='hidden md:block px-4 font-bold cursor-pointer transition-transform hover:translate-y-1'>
          <a href='#skills'>Skills</a>
        </li>
        <li className='hidden md:block px-4 font-bold cursor-pointer transition-transform hover:translate-y-1'>
          <a href='#portfolio'>Projects</a>
        </li>
        <li className='hidden md:block px-4 font-bold cursor-pointer transition-transform hover:translate-y-1'>
          <a href='#certificates'>Certificates</a>
        </li>
        <li className='px-4 cursor-pointer'>
          <a
            href='https://drive.google.com/file/d/1vUOuhOQF6vfCkDt4anAjKAL8z4X9ZuXY/view?usp=share_link'
            target='_blanc'
            className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md '
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
