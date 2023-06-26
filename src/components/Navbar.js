import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [activeLink, setActiveLink] = useState('');
    const handleClick = (link) => {
        setActiveLink(link);
      };
    return(
       <div className="nav_container">
        <h2 style={{color: 'white', fontWeight: 400, marginLeft: '1rem'}}>Unsupervised Text Generator</h2>
        <div>
            <Link className={`links ${activeLink === '/summarize' ? 'active' : ''}`} to="/summarize" onClick={() => handleClick('/summarize')}>Summarize</Link>
            <Link className={`links ${activeLink === '/insertion' ? 'active' : ''}`} to="/insertion" onClick={() => handleClick('/insertion')}>Insertion</Link>
            <Link className={`links ${activeLink === '/completition' ? 'active' : ''}`} to="/completition" onClick={() => handleClick('/completition')}>Completition</Link>
            <Link className={`links ${activeLink === '/grammar' ? 'active' : ''}`} to="/grammar" onClick={() => handleClick('/grammar')}>Grammar Correction</Link>
        </div>
       </div>
       

    )
}

export default Navbar;