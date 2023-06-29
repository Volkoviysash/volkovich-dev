import React from "react";
import MainProjectCard from "./UI/MainProjectCard";

const Portfolio = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Delivery MD",
      description:
        "A food delivery app specifically for Moldova! With a user-friendly interface, the app makes it incredibly convenient to order your favorite dishes from existing restaurants in Chisinau. In the app, you can select the desired restaurant, choose the dishes and make the delivery to your address. The application is written in React-Native with various other technologies.",
      images: [
        require("../assets/projects/delivery/delivery-1.png"),
        require("../assets/projects/delivery/delivery-2.png"),
        require("../assets/projects/delivery/delivery-3.png"),
        require("../assets/projects/delivery/delivery-4.png"),
      ],
      codeLink: "https://github.com/Volkoviysash/delivery-md",
      liveLink: "",
    },
    {
      title: "Developer newsfeed",
      description:
        "A dynamic and engaging platform for developers of all levels to communicate and share their knowledge of different coding languages. A dynamic post loading system that downloads new posts as you browse the feed. If the user is interested in Python, Java or any other programming language, they can easily search and browse relevant posts using search.",
      images: [
        require("../assets/projects/posts-list/posts-list1.png"),
        require("../assets/projects/posts-list/posts-list2.png"),
        require("../assets/projects/posts-list/posts-list3.png"),
        require("../assets/projects/posts-list/posts-list4.png"),
        require("../assets/projects/posts-list/posts-list5.png"),
      ],
      codeLink: "https://github.com/Volkoviysash/Posts-List-React",
      liveLink: "",
    },
    {
      title: "Online School",
      description:
        "The online school site is a comprehensive and user-friendly education platform. This site serves as a virtual learning environment, giving students access to a wealth of educational resources, interactive lessons, and personalized learning. The app empowers students to learn at their own pace, fosters a sense of community, and ensures that quality education remains accessible to all.",
      images: [
        require("../assets/projects/edu-school/edu-school1.png"),
        require("../assets/projects/edu-school/edu-school2.png"),
        require("../assets/projects/edu-school/edu-school3.png"),
        require("../assets/projects/edu-school/edu-school4.png"),
        require("../assets/projects/edu-school/edu-school5.png"),
        require("../assets/projects/edu-school/edu-school6.png"),
      ],
      codeLink: "https://github.com/Volkoviysash/edu-school",
      liveLink: "",
    },
  ];

  return (
    <div
      className='container mx-auto my-8 flex flex-col justify-center items-center'
      id='portfolio'
    >
      <h2 className='text-5xl py-2 mt-10 text-teal-600 font-medium md:text-6xl'>
        Portfolio
      </h2>
      <div className='flex-col justify-center align-middle max-w-5xl py-10'>
        {projects.map((project, index) => (
          <MainProjectCard
            key={index}
            index={index}
            project={project}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
