import React from "react";
import { useState } from 'react';

function Insertion() {
  const [prefix, setPrefix] = useState('');
  const [sufix, setSufix] = useState('');

  const handlePrefix = (event) => {
    setPrefix(event.target.value);
  };
  const handleSufix = (event) => {
    setSufix(event.target.value);
  };



    return (
      <div style={{backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{color: 'white', fontFamily: 'roboto'}}>Insertion</h1>
        <p style={{color: 'white'}}>Prefijo:</p>
        <textarea value={prefix} onChange={handlePrefix} style={{ height: '100px', width: '700px', resize: 'vertical', overflowY: 'scroll' }} />
        <p style={{color: 'white'}}>Sufijo:</p>
        <textarea value={sufix} onChange={handleSufix} style={{ height: '100px', width: '700px', resize: 'vertical', overflowY: 'scroll', marginBottom: '2%' }} />
        <button className="button">
           Send
        </button>

      </div>
    );
  }
  
  export default Insertion;
  