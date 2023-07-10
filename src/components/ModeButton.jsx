import React from 'react';
import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useSnapshot } from 'valtio';
import store from '../store';

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useSnapshot(store);

  return (
    <motion.button
      className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none  "
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      {darkMode ? (
        <FiSun className="text-yellow-500" size={20} />
      ) : (
        <FiMoon className="text-gray-500" size={20} />
      )}
    </motion.button>
  );
};

export default ToggleButton;
