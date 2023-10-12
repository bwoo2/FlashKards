import React, { useState, useRef } from 'react';
import '../styles/addcards.css';

function AddCards() {
  const [position, setPosition] = useState(1);
  const inputsRef = useRef([]);

  const handleShift = (direction) => {
    let newPosition = position + direction;
    if (newPosition < 1) newPosition = 5;
    if (newPosition > 5) newPosition = 1;
    setPosition(newPosition);
    inputsRef.current[newPosition - 1].checked = true;
  }

  return (
    <div className='card_container'>
      <button className="left" onClick={() => handleShift(-1)}>Left</button>
      
      <input ref={el => inputsRef.current[0] = el} type="radio" name="position" defaultChecked />
      <input ref={el => inputsRef.current[1] = el} type="radio" name="position" />
      <input ref={el => inputsRef.current[2] = el} type="radio" name="position" />
      <input ref={el => inputsRef.current[3] = el} type="radio" name="position" />
      <input ref={el => inputsRef.current[4] = el} type="radio" name="position" />
  
      <main id="carousel">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </main>
      
      <button className="right" onClick={() => handleShift(1)}>Right</button>
    </div>
  )
  
}

export default AddCards;
