import React from "react";
import { useState } from 'react';

function Grammar() {

  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "api-key", //INSERTAR LA API KEY GENERADA
    });
const openai = new OpenAIApi(configuration);



async function fetchData(value) {
  try {
    console.log("correct this to standard spanish\n\n" + value,)
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "correct this to standard spanish\n\n" + value,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    
    console.log(response.data.choices.map(choice => choice.text).join('\n'));
    setOutput(response.data.choices.map(choice => choice.text).join('\n'));

    // Process the response here
  } catch (error) {
    // Handle any errors that occur during the request
    console.error(error);
  }
}

    return (
      <div style={{backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{color: 'white'}}>Grammar Correction</h1>
        <textarea value={value} onChange={handleChange} style={{ height: '50px', width: '700px', resize: 'vertical', overflowY: 'scroll', marginBottom: '2%' }} />
        <button className="button" onClick={() => fetchData(value)}>
           Send
        </button>
        <p style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{output}</p>
      </div>
    );
  }
  
  export default Grammar;
  