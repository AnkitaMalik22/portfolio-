import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import store from '../store';
import SketchPicker from '../components/SketchPicker';
import ToggleButton from '../components/ModeButton';
import MySkills from '../components/Skills';
import ProjectSection from '../components/MyProjects';
import AboutSection from '../components/About';
import ContactSection from '../components/Contact';
import FooterSection from '../components/Footer';
import Home from '../components/Home';
import { FaHome, FaUser, FaFolder, FaEnvelope, FaLaptopCode, FaFacebookMessenger, FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';
import ChatBot from './ChatBot';

const Sidebar = () => {
  const { darkMode, lightBG, darkBG ,activeLink,setActiveLink} = useSnapshot(store);
  const [show,setShow] =useState(false);


  return (
    <div className={`flex h-screen flex-col-reverse sm:flex-row `} style={{ color: !darkMode ? lightBG : darkBG  ,backgroundColor:!darkMode ? 'rgb(243 244 246)' : 'rgb(30 41 59)'}}>
      <div className="flex-none p-4">
      <ToggleButton/>
<motion.div className='show fixed z-20 right-1 bottom-36 sm:hidden'>
{   show && activeLink==6  && <FaArrowAltCircleUp   onClick={()=>  setShow(!show)}/>}
  { !show && activeLink==6  && <FaArrowAltCircleDown   onClick={()=>  setShow(!show)}/>}
</motion.div>
      <div className={`flex flex-row justify-around sm:flex-col sm:space-y-8 items-center py-0 sm:py-4 ${show && activeLink==6 ? 'pb-14' : ''}`} >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={()=>setActiveLink(1)}>
          <Link to="/home" className={`flex items-center py-3 px-3  mb-6 sm:mb-0 rounded-[50%] ${darkMode ? 'hover:text-white' : 'hover:text-slate-500'}`} style={{ color : darkMode || activeLink==1 ? darkBG : lightBG,border : activeLink==1  &&`2px solid ${darkBG}`}}>
            <FaHome className="h-5 w-5" />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={()=>setActiveLink(2)}>
          <Link to="/about" className="flex items-center py-3 px-3  mb-6 sm:mb-0 rounded-[50%]" style={{ color : darkMode  ? darkBG : lightBG ,border : activeLink==2  &&`2px solid ${darkBG}`}}  > 
            <FaUser className="h-5 w-5" />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={()=>setActiveLink(3)}>
          <Link to="/projects" className="flex items-center py-3 px-3  mb-6 sm:mb-0 rounded-[50%]" style={{ color : darkMode  ? darkBG : lightBG , border : activeLink==3  &&`2px solid ${darkBG}`}}> 
            <FaFolder className="h-5 w-5" />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={()=>setActiveLink(4)}>
          <Link to="/contact" className="flex items-center py-3 px-3  mb-6 sm:mb-0 rounded-[50%]" style={{ color : darkMode  ? darkBG : lightBG , border : activeLink==4  &&`2px solid ${darkBG}`}}>
            <FaEnvelope className="h-5 w-5" />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={()=>setActiveLink(5)}>
          <Link to="/skills" className="flex items-center py-3 px-3  mb-6 sm:mb-0 rounded-[50%] " style={{ color : darkMode ? darkBG : lightBG,border : activeLink==5  &&`2px solid ${darkBG}`}}>
            {/* skills */}
            <FaLaptopCode className="h-5 w-5" />
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={()=>setActiveLink(6)}>
          <Link to="/chat" className="flex items-center py-3 px-3  mb-6 sm:mb-0 rounded-[50%] " style={{ color : darkMode ? darkBG : lightBG,border : activeLink==6  &&`2px solid ${darkBG}`}}>
        
            <FaFacebookMessenger className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
     
        <SketchPicker/>
      </div>
      <div className="flex-auto p-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<AboutSection/>} />
          <Route path="/projects" element={<ProjectSection/>} />
          <Route path="/skills" element={<MySkills/>} />
          <Route path="/chat" element={<ChatBot darkMode={darkMode} darkBG={darkBG} lightBG={lightBG}/>} />
          <Route path="/contact" element={<ContactSection darkMode={darkMode} darkBG={darkBG} lightBG={lightBG}/>} />
        </Routes>
        <FooterSection darkBG={darkBG} lightBG={lightBG} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Sidebar;
