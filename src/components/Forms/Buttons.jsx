import React, { useState } from 'react';

export default function Buttons({ loadExample, resetForms }){
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
      <label htmlFor='color-picker'>Pick an accent color :</label>
      <input
        type='color'
        id='color-picker'
        value={selectedColor}
        onChange={handleColorChange}
      />
      <button onClick={loadExample} className='custom' type='button' id='example-btn'>Load Example</button>
      <button onClick={resetForms} className='custom' type='button' id='reset-btn'>Reset Forms</button>
    </div>
  );
};