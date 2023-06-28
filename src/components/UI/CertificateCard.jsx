import React from "react";

function CertificateCard({ title, description, image, certificateURL }) {
  return (
    <a href={certificateURL} target='_blank'>
      <div className='bg-white rounded-lg shadow-md h-full p-6 transform transition-all hover:scale-105 cursor-pointer'>
        <h3 className='text-xl font-medium mb-4'>{title}</h3>
        <div>
          <img
            src={image}
            alt='certificate-image'
            className='w-full h-96 rounded-lg'
          />
          <p className='text-gray-600 mt-4 mb-2'>{description}</p>
        </div>
      </div>
    </a>
  );
}

export default CertificateCard;
