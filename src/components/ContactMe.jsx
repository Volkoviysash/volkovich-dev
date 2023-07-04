import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";

function ContactMe() {
  return (
    <div className='h-20 text-5xl flex justify-center gap-4 md:gap-16 pt-3 text-gray-600 items-center'>
      <a
        href='https://twitter.com'
        target='_blank'
        className='transition ease-in-out hover:scale-110 duration-300'
      >
        <AiFillTwitterCircle className='hover:text-teal-500 hover:ease-in' />
      </a>
      <a
        href='https://twitter.com'
        target='_blank'
        className='transition ease-in-out hover:scale-110 duration-300'
      >
        <AiFillLinkedin className='hover:text-teal-500' />
      </a>
      <a
        href='https://twitter.com'
        target='_blank'
        className='transition ease-in-out hover:scale-110 duration-300'
      >
        <AiFillGithub className='hover:text-teal-500' />
      </a>
      <a
        href='https://twitter.com'
        target='_blank'
        className='transition ease-in-out hover:scale-110 duration-300'
      >
        <AiFillInstagram className='hover:text-teal-500' />
      </a>
      <a
        href='https://twitter.com'
        target='_blank'
        className='transition ease-in-out hover:scale-110 duration-300'
      >
        <AiFillMail className='hover:text-teal-500' />
      </a>
    </div>
  );
}

export default ContactMe;
