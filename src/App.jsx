import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import store from './store';
import SketchPicker from './components/SketchPicker';


import Sidebar from './components/Navbar';
import ChatBot from './components/ChatBot';

const App = () => {
  const { darkMode, lightBG, darkBG } = useSnapshot(store);

  return (
    <>

      <motion.div style={{backgroundColor:darkMode ?darkBG :lightBG}}>
       
      <Router>
        <motion.div>
          <Sidebar/>
        </motion.div>
      </Router>
    </motion.div>
    </>
  );
};

export default App;
