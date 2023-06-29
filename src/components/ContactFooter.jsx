import React from "react";
import { TiLocationOutline } from "react-icons/ti";
import { BiMailSend } from "react-icons/bi";

function ContactFooter({ isDarkMode }) {
  return (
    <footer
      className={` shadow-lg  h-1/2 w-screen ${
        isDarkMode
          ? "bg-blue-gray-800 text-gray-300"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className='container mx-auto px-4 py-8 flex flex-col items-left'>
        <h3 className='text-lg text-teal-600 font-bold mb-4'>CONTACT</h3>
        <p className='text-3xl font-bold text-left mb-8'>
          Don't be shy! Hit me up! 👇
        </p>
        <ul className='text-xl flex items-center space-x-12'>
          <li>
            <div className='flex items-center space-x-2'>
              <div className='flex items-center justify-center rounded-full bg-gray-100 w-16 h-16'>
                <TiLocationOutline className='text-teal-600 text-3xl' />
              </div>
              <div>
                <p
                  className={` font-bold text-xl ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Location
                </p>
                <p
                  className={` text-xl ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Chisinau, Moldova
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className='flex items-center space-x-2'>
              <div className='flex items-center justify-center rounded-full bg-gray-100 w-16 h-16'>
                <BiMailSend className='text-teal-600 text-3xl' />
              </div>
              <div>
                <p
                  className={` font-bold text-xl ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Mail
                </p>
                <p
                  className={` text-xl ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  volkoviysash@gmail.com
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default ContactFooter;
