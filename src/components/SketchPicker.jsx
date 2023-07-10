import React, { useState } from 'react';
import { TwitterPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import store from '../store';

import { motion } from 'framer-motion';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

const Picker = () => {
  const { lightBG, setLightBG } = useSnapshot(store);

  const handleColorChange = (color) => {
    setLightBG(color.hex);
    console.log(lightBG);
  };

  return <TwitterPicker color={lightBG} onChange={handleColorChange}  />;
};

const ToggleButton = () => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    setIsPickerVisible(!isPickerVisible);
  };

  return (
    <div className='relative right-1 z-10 sm:absolute sm:right-auto'>
      <button
        className={`flex items-center justify-center w-10 h-10 rounded-full focus:outline-none  ${
          isDarkMode ? 'text-indigo-500' : 'text-green-500'
        }`}
        onClick={handleToggle}
      >
        {isDarkMode ? (
          <FaToggleOn size={20} />
        ) : (
          <FaToggleOff size={20} />
        )}
      </button>

      {isPickerVisible && <Picker />}
    </div>
  );
};

export default ToggleButton;
