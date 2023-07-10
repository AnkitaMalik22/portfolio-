import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3 ,FaGraduationCap} from 'react-icons/fa';
import aboutBg from '../assets/about-bg.jpg'

const academics = [
  { year: '2017', title: 'Secondary Education' ,marks : '80%' , from :'Belmuri Balika Vidyalaya'},
  { year: '2020', title: 'CST Diploma' ,marks :'76%' ,from : 'Womens Polytechnic Chandannagar'},
  { year: '2023', title: 'CSE Graduate',marks: '85%',from :'MIET ,Bandel' },
];

const AboutSection = () => {
  
  return (
    <section className="py-16 ">
          {/* <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2> */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around overflow-hidden h-full">
        <div className="w-1/2 md:w-2/3 mb-8 md:mb-0">
          <motion.img
            src={aboutBg}
            alt="My Photo"
            className="w-full h-auto rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
         
     
          />
        </div>
        <div className="w-full md:w-1/2 pl-6">
    <div className="rounded-lg">
      <div className="flex flex-col space-y-4">
        {academics.map((academic) => (
          <motion.div
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={academic.year}
          >
            <FaGraduationCap className="text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">{academic.title}</h3>
              <p className="text-gray-500">{`Year: ${academic.year}`}</p>
              <p className="text-gray-500">{`Percentage: ${academic.marks}`}</p>
              <p className="text-slate-400">{`Institute: ${academic.from}`}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <motion.div
      className="rounded-lg h-2 mt-8"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 1 }}
    />
  </div>
      </div>
    </section>
  );
};

export default AboutSection

