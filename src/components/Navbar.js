import React from "react";
import './Navbar.css';

function Navbar() {
    return(
       <div className="nav_container">
        <h2 style={{color: 'white', fontWeight: 400, marginLeft: '1rem'}}>Unsupervised Text Generator</h2>
        <div>
            <a className='links' href="/">Text completition</a>
            <a className='links' href="/">Text insertion</a>
            <a className='links' href="/">Grammar Correction</a>
            <a className='links' href="/">Summarize text</a>
        </div>
       </div>

    )
}

export default Navbar;