import React from "react";
import { useState } from 'react';
import './Menu.css'

function Completition() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
    <body>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{color: 'white'}}>Completition</h1>
        <textarea value={value} onChange={handleChange} style={{ height: '50px', width: '700px', resize: 'vertical', overflowY: 'scroll', marginBottom: '2%' }} />
        <button className="button">
           Send
        </button>
        <p style={{color: 'white'}}>Value: {value}</p>
      </div>
      </body>
    );
  }
  
  export default Completition;
  