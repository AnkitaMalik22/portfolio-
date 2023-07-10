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
          <motion.div
            className={`text-sm font-medium ${darkMode ? 'text-slate-50' : 'text-slate-400'}`}
            {...headTextAnimation}
          >
            Available for freelance projects
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
          <motion.button
            className={`flex-none flex items-center justify-center w-9 h-9 rounded-full ${
              darkMode ? 'text-white bg-cyan-400' : 'text-violet-600 bg-white'
            }`}
            type="button"
            aria-label="Like"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.1 }}
            style={{ backgroundColor: lightBG }}
          >
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <motion.path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                variants={fadeAnimation}
              />
            </svg>
          </motion.button>
        </div>
        <motion.p
          className={`text-sm text-justify ${darkMode ? 'text-slate-200' : 'text-slate-500'}`}
          variants={slideAnimation('up')}
        >
          I am a web developer with a passion for creating clean and functional websites. I specialize in front-end
          development using HTML, CSS, and JavaScript. I strive to deliver high-quality websites that provide a great
          user experience. Let's work together on your next project!
        </motion.p>
      </motion.div>
      <CanvasTest  />
    </motion.div>
  );
};

export default Home;
