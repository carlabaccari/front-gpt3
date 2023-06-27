import React from "react";
import { useState } from 'react';

function Insertion() {
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');

  const [output, setOutput] = useState('');

  const handlePrefix = (event) => {
    setPrefix(event.target.value);
  };
  const handleSufix = (event) => {
    setSuffix(event.target.value);
  };

  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "api-key", //INSERTAR LA API KEY GENERADA
      });
  const openai = new OpenAIApi(configuration);
  
  
  async function fetchData(prefix, suffix) {

    try {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prefix,
        suffix: suffix,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      console.log(response.data.choices.map(choice => choice.text).join('\n'))
      setOutput(response.data.choices.map(choice => choice.text).join('\n'));
  
      
      
  
      // Process the response here
      console.log(response);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  }




    return (
      <div style={{backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{color: 'white', fontFamily: 'arial'}}>Insertion</h1>
        <p style={{color: 'white'}}>Prefijo:</p>
        <textarea value={prefix} onChange={handlePrefix} style={{ height: '100px', width: '700px', resize: 'vertical', overflowY: 'scroll' }} />
        <p style={{color: 'white'}}>Sufijo:</p>
        <textarea value={suffix} onChange={handleSufix} style={{ height: '100px', width: '700px', resize: 'vertical', overflowY: 'scroll', marginBottom: '2%' }} />
        <button className="button" onClick={() => fetchData(prefix, suffix)}>
           Send
        </button>
        <p style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>{output}</p>
       

      </div>
    );
  }
  
  export default Insertion;
  