import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav className='p-10 mb-12 flex justify-between'>
      <h1 className='text-xl font-burtons font-bold'>volkovich.dev</h1>
      <ul className='flex items-center'>
        <li className='px-4'>
          <BsFillMoonStarsFill className='cursor-pointer text-xl hover:text-gray-400' />
        </li>
        <li className='px-4 font-bold cursor-pointer transition-transform hover:translate-y-1'>
          <a>Home</a>
        </li>
        <li className='px-4 font-bold cursor-pointer transition-transform hover:translate-y-1'>
          <a>About</a>
        </li>
        <li className='px-4 font-bold cursor-pointer transition-transform hover:translate-y-1'>
          <a>Projects</a>
        </li>
        <li className='px-4 font-bold cursor-pointer transition-transform hover:translate-y-1'>
          <a>Contact</a>
        </li>
        <li className='px-4'>
          <a
            href='#'
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
