import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className="fixed bottom-5 right-5 z-[1000] w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 bg-[#1e1e1e] dark:bg-[#252525]"
      onClick={toggleDarkMode}
    >
      <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-2xl text-[#6ba9f2]`} />
    </div>
  );
};

export default DarkModeToggle;
