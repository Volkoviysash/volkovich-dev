import React from "react";
import SkillsCard from "./SkillsCard";
import design from "../images/design.png";
import code from "../images/code.png";
import consulting from "../images/consulting.png";

function MySkills() {
  return (
    <section className='my-40 md:flex md:flex-col md:justify-center md:items-center'>
      <h1 className='text-center text-5xl font-medium text-gray-800 p-4 rounded-md md:mb-10'>
        My skills:
      </h1>
      <div className='md:flex gap-10 justify-center '>
        <SkillsCard
          image={design}
          title='Front-End'
          skills={[
            "HTML / CSS",
            "React",
            "Redux",
            "TypeScript",
            "Tailwind",
            "Bootstrap",
          ]}
        />
        <SkillsCard
          image={code}
          title='Coding languages'
          describe='Other languages I know'
          skills={["JavaScript", "Python", "C#", "C", "Shell", "Others"]}
        />
        <SkillsCard
          image={consulting}
          title='Other skills'
          describe='Other skills that I have'
          skills={[
            "Economics",
            "Data Analysis",
            "Algorithms and Data Structures",
            "Postgres",
            "MongoDB",
          ]}
        />
      </div>
    </section>
  );
}

export default MySkills;
