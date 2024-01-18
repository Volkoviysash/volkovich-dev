import React from "react";
import { motion } from "framer-motion";
import helloPng from "../assets/images/alex-hello.png";
import ContactMe from "./ContactMe";
import { leftAnimation, rightAnimation } from "../animation/animation";

function AboutMe() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      className='min-h-screen'
      id='home'
    >
      <div className='text-center p-5 my-10'>
        <h2 className='text-3xl py-2 mt-10 text-teal-600 font-medium md:text-6xl'>
          iOS developer
        </h2>
        <div className='md:flex md:justify-center md:mx-auto md:items-center'>
          <motion.div
            variants={leftAnimation}
            className='relative rounded-full shadow-xl w-65 h-65 md:w-45 md:h-45 m-10 overflow-hidden border-4 border-gray-300'
          >
            <img
              src={helloPng}
              alt='avatar'
              className='w-full h-full object-cover dark:bg-gray-200'
            />
          </motion.div>
          <motion.div
            variants={rightAnimation}
            className='bg-gray-100 text-left rounded-lg py-2 px-3 max-w-xl inline-block'
          >
            <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-900'>
              Volkovich Alexandr
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
              Hi, I'm Volkovich Alexandr. Experienced iOS developer based in
              Chisinau, Moldova.
            </p>
          </motion.div>
        </div>
      </div>
      <ContactMe />
    </motion.section>
  );
}

export default AboutMe;
