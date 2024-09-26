import React, { useState } from 'react';

const Test = () => {
  const [selected, setSelected] = useState('About Me');

  const toggleButtons = ['About Me', 'Experiences', 'Recommended'];

  return (
    <div className="relative w-full max-w-sm mx-auto p-2 bg-gray-800 rounded-full shadow-md">
      {/* Background that moves with the selected button */}
      <div
        className={`absolute top-0 left-0 w-1/3 h-full bg-gray-900 rounded-full transition-transform duration-300 ease-in-out transform ${
          selected === 'About Me' ? 'translate-x-0' : 
          selected === 'Experiences' ? 'translate-x-full' : 'translate-x-[200%]'
        }`}
      ></div>

      {/* Toggle Buttons */}
      <div className="relative z-10 flex justify-between w-full">
        {toggleButtons.map((button, index) => (
          <button
            key={index}
            className={`relative z-20 w-1/3 py-2 font-semibold text-sm rounded-full transition-colors duration-300 ${
              selected === button
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setSelected(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Test
