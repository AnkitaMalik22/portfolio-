import React, { useState,useEffect } from 'react';
import { color, motion ,useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useSnapshot } from 'valtio';
import { FaCode, FaLaptopCode, FaMobileAlt, FaFilter, FaLink, FaGithub, FaReact, FaJs, FaHtml5, FaNodeJs } from 'react-icons/fa';
import store from '../store';

const projects = [
  { id: 1, title: 'Super App', skills: ['React', 'JavaScript', 'HTML', 'CSS'] ,deployedLink :'https://super-app-react.vercel.app/' ,repoLink :'https://github.com/AnkitaMalik22/react-super-app'},
  { id: 2, title: 'Rock Paper Scissor', skills: ['HTML', 'CSS','JavaScript'] ,deployedLink:'https://stone-paper-scissor-alpha.vercel.app/'  ,repoLink : 'https://github.com/AnkitaMalik22/Stone-Paper-Scissor'},
  { id: 3, title: 'React Notes', skills: ['HTML', 'CSS','React'] ,deployedLink : 'https://react-notes-ankitamalik22.vercel.app/', repoLink : 'https://github.com/AnkitaMalik22/react-notes'},
  { id: 4, title: 'Multi Step Form', skills: ['HTML', 'CSS','React'] ,deployedLink : 'https://multi-step-form-react-tan.vercel.app/', repoLink : 'https://github.com/AnkitaMalik22/multi-step-form'},
  { id: 5, title: 'Product Listing', skills: ['NodeJs', 'React'] ,deployedLink : 'https://product-listing-ankitamalik22.vercel.app/', repoLink : 'https://github.com/AnkitaMalik22/product-listing'},
  { id: 6, title: 'Hotel Surplus Food Distribution', skills: ['NodeJs', 'React'] ,deployedLink : 'https://hotelsurplusfooddistribution.us/', repoLink : 'https://github.com/AnkitaMalik22/hsfd-system'},

];
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const ProjectCard = ({ title, skills,darkMode,darkBG,lightBG,deployedLink,repoLink }) =>{
const control = useAnimation();
const [ref, inView] = useInView();

useEffect(() => {
  if (inView) {
    control.start("visible");
  } else {
    control.start("hidden");
  }
}, [control, inView]);

return(

  <motion.div
    className=" shadow-lg rounded-lg p-8 flex flex-col items-center justify-center mx-3"
 
    style={{backgroundColor : !darkMode ? lightBG : darkBG ,color :'#ffff'}}
    ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
  >
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
  
        <li key={skill} className={` ${darkMode ? 'bg-slate-800 text-white' : 'bg-white '}  text-gray-600 rounded-full px-3 py-1 text-sm`}>
          {skill}
        </li>
       
 
      ))}
    </ul>
    <motion.div className='flex items-center justify-between w-[20%] pt-4 cursor-pointer '>
      <a  href={repoLink} target='_blank'> <FaGithub/> </a>
      <a  href={deployedLink} target='_blank'> <FaLink/> </a>
      
      
      </motion.div>
  </motion.div>
);}

const ProjectSection = () => {
  const { darkBG, lightBG ,darkMode } = useSnapshot(store);
  const [selectedSkill, setSelectedSkill] = useState('');

  const handleSkillFilter = (skill) => {
    setSelectedSkill(skill);
  };

  const filteredProjects = selectedSkill
    ? projects.filter((project) => project.skills.includes(selectedSkill))
    : projects;

  return (
    <section className={`py-12 h-full ${darkMode ? 'bg-slate-800' : 'text-slate-100'}` }  style={{color : !darkMode ? lightBG : darkBG}}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8  text-center"  style={{color: !darkMode ? lightBG : darkBG}}>My Projects</h2>
        <div className="flex items-center gap-4 mb-6 justify-between mx-3">
          <h4 className="text-lg">Filter by Skill:</h4>
          <div className="flex gap-2">
            <button
              className={`flex items-center justify-center rounded-full bg-transparent border  hover:bg-cyan-200 focus:outline-none p-2 ${
                selectedSkill === '' ? 'text-blue-500' : ''
              }`}
              onClick={() => handleSkillFilter('')}
              style={{borderColor : !darkMode ? lightBG : darkBG }}

            >
              <FaFilter />
            </button>
            <button
              className={`flex items-center justify-center rounded-full bg-transparent border border-gray-300 hover:bg-gray-200 focus:outline-none p-2 ${
                selectedSkill === 'React' ? 'text-blue-500' : ''
              }`}
              onClick={() => handleSkillFilter('React')}
              style={{borderColor : !darkMode ? lightBG : darkBG }}
            >
              <FaReact />
            </button>
            <button
              className={`flex items-center justify-center rounded-full bg-transparent border border-gray-300 hover:bg-gray-200 focus:outline-none p-2 ${
                selectedSkill === 'JavaScript' ? 'text-blue-500' : ''
              }`}
              onClick={() => handleSkillFilter('JavaScript')}
              style={{borderColor : !darkMode ? lightBG : darkBG }}
            >
              <FaJs />
            </button>
            <button
              className={`flex items-center justify-center rounded-full bg-transparent border border-gray-300 hover:bg-gray-200 focus:outline-none p-2 ${
                selectedSkill === 'Electron' ? 'text-blue-500' : ''
              }`}
              onClick={() => handleSkillFilter('NodeJs')}
              style={{borderColor : !darkMode ? lightBG : darkBG }}
            >
              <FaNodeJs />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} title={project.title} skills={project.skills} deployedLink={project.deployedLink} repoLink={project.repoLink} darkBG={darkBG} lightBG={lightBG} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
