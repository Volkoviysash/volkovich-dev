import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dictum est, vitae vulputate velit bibendum a. Nullam elementum lectus sit amet justo finibus blandit. Nam posuere ultricies nisl, nec pellentesque risus vulputate vel. Ut in risus nisl. ",
      image: "",
      codeLink: "https://github.com/yourname/project1",
      liveLink: "https://www.project1.com",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dictum est, vitae vulputate velit bibendum a. Nullam elementum lectus sit amet justo finibus blandit. Nam posuere ultricies nisl, nec pellentesque risus vulputate vel. Ut in risus nisl. ",
      image: "",
      codeLink: "https://github.com/yourname/project2",
      liveLink: "https://www.project2.com",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dictum est, vitae vulputate velit bibendum a. Nullam elementum lectus sit amet justo finibus blandit. Nam posuere ultricies nisl, nec pellentesque risus vulputate vel. Ut in risus nisl. ",
      image: "",
      codeLink: "https://github.com/yourname/project3",
      liveLink: "https://www.project3.com",
    },
  ];

  return (
    <div className='container mx-auto my-8 flex flex-col justify-center items-center'>
      <h2 className='text-5xl py-2 m-10 text-teal-600 font-medium md:text-6xl'>
        Portfolio
      </h2>
      <div className='grid grid-cols-1 gap-10 max-w-4xl'>
        {projects.map((project, index) => (
          <div
            className='rounded-lg overflow-hidden shadow-lg flex'
            key={index}
          >
            <img src={project.image} alt={project.title} className='w-2/3' />
            <div className='p-4 w-1/3'>
              <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
              <p className='text-gray-700 text-base mb-4'>
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
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
