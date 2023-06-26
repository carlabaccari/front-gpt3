import React from "react";
import { useState } from 'react';

function Grammar() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
      <div style={{backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{color: 'white'}}>Grammar Correction</h1>
        <textarea value={value} onChange={handleChange} style={{ height: '50px', width: '700px', resize: 'vertical', overflowY: 'scroll', marginBottom: '2%' }} />
        <button className="button">
           Send
        </button>
        <p>Value: {value}</p>
      </div>
    );
  }
  
  export default Grammar;
  