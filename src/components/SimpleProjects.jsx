import React from "react";
import SimpleProjectCard from "./UI/SimpleProjectCard";

function SimpleProjects({ isDarkMode }) {
  const simpleProjects = [
    {
      title: "JWT-Authorization",
      description:
        "This app provides an implementation of JWT authorization. JWTs are used for secure authentication and authorization in web applications. In this example, users can register their accounts and verify them via email.",
      image: require("../assets/simple-projects/jwt/jwt.png"),
      codeLink: "https://github.com/Volkoviysash/jwt-authorization",
    },
    {
      title: "Random Quote",
      description:
        "This app is a fun and inspirational platform that generates random quotes to motivate and inspire its users. With a simple click, you can receive a new quote that is unique and thought-provoking. ",
      image: require("../assets/simple-projects/random-quote/random1.png"),
      codeLink: "https://github.com/Volkoviysash/Random-quote",
    },
    {
      title: "React Calculator",
      description:
        "My web calculator is a powerful and user-friendly tool that simplifies complex calculations and makes math easy for everyone. Its intuitive interface and simple design make it accessible to anyone, regardless of their level of math proficiency.",
      image: require("../assets/simple-projects/calculator/calc2.png"),
      codeLink: "https://github.com/Volkoviysash/React-calculator",
    },
  ];

  return (
    <section className='container mx-auto my-8 flex flex-col justify-center items-center'>
      <h2 className='text-5xl py-2 m-10 text-teal-600 font-medium md:text-6xl'>
        Small projects
      </h2>
      <section className='lg:flex lg:flex-row lg:justify-center lg:items-center h-full'>
        {simpleProjects.map((project) => (
          <SimpleProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            codeLink={project.codeLink}
            isDarkMode={isDarkMode}
          />
        ))}
      </section>
    </section>
  );
}

export default SimpleProjects;
