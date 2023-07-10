import React, { useState,useEffect } from 'react';
import { color, motion ,useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { FaDatabase, FaServer, FaReact, FaCode, FaHtml5, FaCss3, FaJs, FaJava, FaGift, FaGit, FaGithub } from 'react-icons/fa';
import { useSnapshot } from 'valtio';
import store from '../store'


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};
const skills = [
  {
    icon: <FaDatabase className="text-4xl text-blue-500 mb-2" />,
    title: 'MongoDB',
    description: 'NoSQL Database',
  },
  {
    icon: <FaServer className="text-4xl text-yellow-500 mb-2" />,
    title: 'Express.js',
    description: 'Web Application Framework',
  },
  {
    icon: <FaReact className="text-4xl text-purple-500 mb-2" />,
    title: 'React',
    description: 'JavaScript Library',
  },
  {
    icon: <FaCode className="text-4xl text-cyan-500 mb-2" />,
    title: 'Node.js',
    description: 'JavaScript Runtime',
  },
  {
    icon : <FaHtml5 className="text-4xl text-orange-500 mb-2" />,
    title : 'Html',
description : ''
  },
  {
    icon : <FaCss3 className="text-4xl  text-sky-500 mb-2" />,
    title : 'CSS',
description : ''
  },
  {
    icon : <FaJs className="text-4xl text-yellow-500  mb-2" />,
    title : 'Javascript',
description : ''
  },
  {
    icon : <FaJava className="text-4xl  text-red-500 mb-2" />,
    title : 'Java',
description : ''
  },

];





const MySkills = () => {
  const control = useAnimation();
const [ref, inView] = useInView();
const { darkMode,lightBG ,darkBG} = useSnapshot(store);
useEffect(() => {
  if (inView) {
    control.start("visible");
  } else {
    // control.start("hidden");
    control.start("visible");
  }
}, [control, inView]);

  return (
    <div className="py-12 h-full" >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center  mb-8" style={{color:darkMode ? darkBG : lightBG}}>My Skills - MERN Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
       
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className={`${!darkMode ? 'shadow-lg' : ''} rounded-lg p-6 flex flex-col items-center}`}
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          style={{
            boxShadow: darkMode && '2px 2px 2px rgba(255, 255, 255, 0.08), -2px -2px 2px rgba(0, 0, 0, 0.56), -2px -2px 2px rgba(255, 255, 255, 0.08) inset, 2px 2px 2px rgba(0, 0, 0, 0.56) inset',
            border: darkMode && '0 solid rgba(0, 0, 0, 0)',
            backgroundColor: darkMode && 'linear-gradient(330deg, #333, #111)',
          }}
        >
          {skill.icon}
          <h3 className="text-lg font-medium text-gray-400">{skill.title}</h3>
          <p className="text-sm text-gray-600">{skill.description}</p>
        </motion.div>
      ))}

          
        </div>
      </div>
    </div>
  );
};

export default MySkills;
