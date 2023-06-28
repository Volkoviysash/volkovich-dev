import React from "react";
import MainProjectCard from "./UI/MainProjectCard";

const Portfolio = () => {
  const projects = [
    {
      title: "Delivery MD",
      description:
        "A food delivery app designed specifically for Moldova! With a user-friendly interface, the app makes it incredibly convenient to order your favorite dishes from existing restaurants in Chisinau. In the app, you can select the desired restaurant, choose the dishes and make the delivery to your address. The application is written in React-Native with various other technologies.",
      images: ["", ""],
      codeLink: "https://github.com/Volkoviysash/delivery-md",
      liveLink: "",
    },
    {
      title: "Developer newsfeed",
      description:
        "A dynamic and engaging platform for developers of all levels to communicate and share their knowledge of different coding languages. A dynamic post loading system that downloads new posts as you browse the feed. If the user is interested in Python, Java or any other programming language, they can easily search and browse relevant posts using search.",
      images: ["", ""],
      codeLink: "https://github.com/Volkoviysash/Posts-List-React",
      liveLink: "",
    },
    {
      title: "Online School",
      description:
        "The online school site is a comprehensive and user-friendly education platform. This site serves as a virtual learning environment, giving students access to a wealth of educational resources, interactive lessons, and personalized learning. The app empowers students to learn at their own pace, fosters a sense of community, and ensures that quality education remains accessible to all.",
      images: ["", ""],
      codeLink: "https://github.com/Volkoviysash/edu-school",
      liveLink: "",
    },
  ];

  return (
    <div className='container mx-auto my-8 flex flex-col justify-center items-center'>
      <h2 className='text-5xl py-2 m-10 text-teal-600 font-medium md:text-6xl'>
        Portfolio
      </h2>
      <div className='grid grid-cols-0 gap-10 max-w-4xl py-10'>
        {projects.map((project, index) => (
          <MainProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
