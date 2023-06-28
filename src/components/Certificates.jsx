import React from "react";
import CertificateCard from "./UI/CertificateCard";

function Certificates() {
  const certificates = [
    {
      title: "Front End Development Libraries",
      description:
        "In this course, I developed my front-end development skills by mastering popular libraries such as Bootstrap, Sass, React, and Redux, which allowed me to create dynamic and efficient single-page applications.",
      image: require("../assets/certificates/front-end.png"),
      certificateURL:
        "https://www.freecodecamp.org/certification/VolkovichAlexandr/front-end-development-libraries",
    },
    {
      title: "JS Algorithms and Data Structures",
      description:
        "Сourse on JS that covers the fundamentals of the language and applied that knowledge to create algorithms for various tasks, also learning about Object Oriented Programming (OOP) and Functional Programming (FP).",
      image: require("../assets/certificates/js-algorithms.png"),
      certificateURL:
        "https://www.freecodecamp.org/certification/VolkovichAlexandr/javascript-algorithms-and-data-structures",
    },
    {
      title: "Relational Database",
      description:
        "In this course, I got hands-on experience using developer tools such as VS Code, PostgreSQL, and the Linux/Unix command line, as well as learning Bash scripts, PostgreSQL relational databases, and Git version control.",
      image: require("../assets/certificates/relational-db.png"),
      certificateURL:
        "https://www.freecodecamp.org/certification/VolkovichAlexandr/relational-database-v8",
    },
    {
      title: "Responsive Web Design",
      description:
        "A certification course in Responsive Web Design, where I created various responsive web projects using HTML and CSS.",
      image: require("../assets/certificates/responsive-web.png"),
      certificateURL:
        "https://www.freecodecamp.org/certification/VolkovichAlexandr/responsive-web-design",
    },
  ];

  return (
    <section className='container mx-auto mt-8 mb-14 flex flex-col justify-center items-center '>
      <h2 className='text-5xl py-2 m-10 text-teal-600 font-medium md:text-6xl'>
        Certificates
      </h2>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 '>
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.title}
            title={certificate.title}
            description={certificate.description}
            image={certificate.image}
            certificateURL={certificate.certificateURL}
          />
        ))}
      </div>
    </section>
  );
}

export default Certificates;
