import React from "react";
import SimpleProjectCard from "./UI/SimpleProjectCard";

function SimpleProjects() {
  const simpleProjects = [
    {
      title: "JWT-Authorization",
      description:
        "This app provides an implementation of JWT authorization. JWTs are used for secure authentication and authorization in web applications. In this example, users can register their accounts and verify them via email. Once authenticated, users are issued access and refresh tokens, which are stored in local storage and cookies, respectively. When the access token expires, a request is made to the server using the refresh token to obtain new tokens.",
      image: "",
      codeLink: "https://github.com/Volkoviysash/jwt-authorization",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dictum est, vitae vulputate velit bibendum a. Nullam elementum lectus sit amet justo finibus blandit. Nam posuere ultricies nisl, nec pellentesque risus vulputate vel. Ut in risus nisl. ",
      image: "",
      codeLink: "https://github.com/yourname/project2",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dictum est, vitae vulputate velit bibendum a. Nullam elementum lectus sit amet justo finibus blandit. Nam posuere ultricies nisl, nec pellentesque risus vulputate vel. Ut in risus nisl. ",
      image: "",
      codeLink: "https://github.com/yourname/project3",
    },
    {
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dictum est, vitae vulputate velit bibendum a. Nullam elementum lectus sit amet justo finibus blandit. Nam posuere ultricies nisl, nec pellentesque risus vulputate vel. Ut in risus nisl. ",
      image: "",
      codeLink: "https://github.com/yourname/project4",
    },
  ];

  return (
    <section className='container mx-auto my-8 flex flex-col justify-center items-center'>
      <h2 className='text-5xl py-2 m-10 text-teal-600 font-medium md:text-6xl'>
        Small projects
      </h2>
      <section className='lg:flex lg:flex-row lg:justify-center lg:items-center'>
        {simpleProjects.map((project) => (
          <SimpleProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            codeLink={project.codeLink}
          />
        ))}
      </section>
    </section>
  );
}

export default SimpleProjects;
