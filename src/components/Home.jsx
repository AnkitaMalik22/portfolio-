import React from 'react';
import { useSnapshot } from 'valtio';
import { motion } from 'framer-motion';
import store from '../store';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
  fadeAnimation,
  imageAnimation,
} from '../motion';

import ToggleButton from './ModeButton';
import CanvasTest from './Canvas';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { darkMode, lightBG, darkBG } = useSnapshot(store);
  const navigate = useNavigate()

  return (
    <motion.div
      className={`flex font-sans h-full ${darkMode ? 'bg-slate-800' : 'bg-gray-100'} flex-col-reverse sm:flex-row items-center overflow-hidden `}
      {...headContainerAnimation}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="flex-auto p-6 w-full sm:w-1/2" {...headContentAnimation}>
        <div className="flex flex-wrap">
          <motion.h1
            className={`flex-auto font-medium ${darkMode ? 'text-slate-400' : 'text-slate-900'}`}
            {...slideAnimation('up')}
          >
            Ankita Malik
          </motion.h1>
          <motion.div
            className={`w-full flex-none mt-2 order-1 text-3xl font-bold ${
              darkMode ? 'text-cyan-400' : 'text-violet-600'
            }`}
            {...headTextAnimation}
            style={{ color: lightBG }}
          >
            Web Developer
          </motion.div>
        
        </div>
        <div className="flex flex-col sm:flex-row items-baseline mt-4 mb-1 pb-6">
          <div className="space-x-2 flex text-sm font-bold">
            <span
              className={`text-violet-400 ${darkMode ? 'text-white' : 'text-slate-700'}`}
              {...headTextAnimation}
              style={{ color: lightBG }}
            >
              Location:
            </span>
            <span className={`text-slate-700 ${darkMode ? 'text-white' : 'text-slate-700'}`} {...headTextAnimation}>
              West Bengal, India
            </span>
          </div>
        </div>
        <div className="flex space-x-4 mb-3 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <motion.button
         onClick={()=>navigate("/contact")}
              className={`h-10 px-3 sm:px-6 font-semibold rounded-full ${
                darkMode ? 'bg-cyan-400 text-slate-100' : 'bg-violet-600 text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.3 }}
              style={{ backgroundColor: lightBG }}
            >
              Contact Me
            </motion.button>
            <motion.button
                   onClick={()=>navigate("/projects")}
              className={`h-10 px-3 sm:px-6 font-semibold rounded-full  border ${
                darkMode ? 'border-cyan-400 text-cyan-400' : 'border-slate-200 text-slate-900'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.3 }}
              style={{ borderColor: lightBG, color: lightBG }}
            >
              View Projects
            </motion.button>
          </div>
      
        </div>
        <motion.p
          className={`text-sm text-justify ${darkMode ? 'text-slate-200' : 'text-slate-500'}`}
          variants={slideAnimation('up')}
        >
        A Computer Science graduate deeply passionate about web development, I am actively seeking web developer positions in the MERN stack, with the goal of advancing my skills and making meaningful contributions to impactful projects.
        </motion.p>
      </motion.div>
      <CanvasTest  />
    </motion.div>
  );
};

export default Home;
