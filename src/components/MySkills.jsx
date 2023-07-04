import React from "react";
import SkillsCard from "./UI/SkillsCard";
import design from "../assets/images/design.png";
import code from "../assets/images/code.png";
import consulting from "../assets/images/consulting.png";

function MySkills() {
  const skills = [
    {
      image: design,
      title: "Front-End",
      skills: [
        "HTML / CSS",
        "React",
        "Redux",
        "TypeScript",
        "Tailwind",
        "Bootstrap",
      ],
    },
    {
      image: code,
      title: "Coding languages",
      describe: "Other languages I know",
      skills: ["JavaScript", "Python", "C#", "C", "Shell", "Others"],
    },
    {
      image: consulting,
      title: "Other skills",
      describe: "Other skills that I have",
      skills: [
        "Economics",
        "Data Analysis",
        "Algorithms and Data Structures",
        "Postgres",
        "MongoDB",
      ],
    },
  ];

  return (
    <section
      className='md:flex md:flex-col md:justify-center md:items-center'
      id='skills'
    >
      <h1 className='text-5xl py-2 my-10 text-teal-600 font-medium md:text-6xl text-center'>
        My skills:
      </h1>
      <div className='md:flex md:gap-10 justify-center '>
        {skills.map((skill) => (
          <SkillsCard
            key={skill.title}
            image={skill.image}
            title={skill.title}
            skills={skill.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default MySkills;
