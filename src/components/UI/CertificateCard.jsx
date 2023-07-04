import React from "react";

function CertificateCard({
  title,
  description,
  image,
  certificateURL,
  isDarkMode,
}) {
  return (
    <a href={certificateURL} target='_blank' rel='noreferrer'>
      <div
        className={`m-2 rounded-lg shadow-md h-full p-6 transform transition-all hover:scale-105 cursor-pointer ${
          isDarkMode ? "bg-blue-gray-800 text-gray-300" : "bg-white"
        }`}
      >
        <h3 className='text-xl font-medium mb-4'>{title}</h3>
        <div>
          <img
            src={image}
            alt='certificate'
            className='w-full h-96 rounded-lg'
          />
          <p
            className={` mt-4 mb-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

export default CertificateCard;
