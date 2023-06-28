import React from "react";
import SkillsCard from "./UI/SkillsCard";
import design from "../assets/images/design.png";
import code from "../assets/images/code.png";
import consulting from "../assets/images/consulting.png";

function MySkills() {
  return (
    <section className='md:flex md:flex-col md:justify-center md:items-center'>
      <h1 className='text-5xl py-2 m-10 text-teal-600 font-medium md:text-6xl'>
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
