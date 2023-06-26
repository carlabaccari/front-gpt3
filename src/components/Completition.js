import React from "react";
import { useState } from 'react';
import './Menu.css'

function Completition() {
  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
    });
const openai = new OpenAIApi(configuration);



async function fetchData(value) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: value,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log(response.data.choices.map(choice => choice.text).join('\n'));
    setOutput(response.data.choices.map(choice => choice.text).join('\n'));

    

    // Process the response here
    console.log(response);
  } catch (error) {
    // Handle any errors that occur during the request
    console.error(error);
  }
}

    return (
    <body>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{color: 'white'}}>Completition</h1>
        <textarea value={value} onChange={handleChange} style={{ height: '50px', width: '700px', resize: 'vertical', overflowY: 'scroll', marginBottom: '2%' }} />
        <button className="button" onClick={() => fetchData(value)}>
           Send
        </button>
        <p style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{output}</p>
      </div>
      </body>
    );
  }
  
  export default Completition;
  