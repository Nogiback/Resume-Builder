import React, { useState } from 'react';

export default function Buttons(){
  const [selectedColor, setSelectedColor] = useState('#1DD7E1');

  function handleColorChange(e) {
    setSelectedColor(e.target.value);

    const root = document.querySelector(':root');
    root.style.setProperty('--custom-color', e.target.value);
    const elements = document.getElementsByClassName('custom');
    for (const element of elements) {
      element.style.setProperty('--custom-color', e.target.value);
    }

  };

  return (
    <div className='form-container' id='buttons-container'>
      {/* Color picker input */}
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
    </div>
  );
};