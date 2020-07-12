import React from 'react';
import './NavBar.css';
import logo from './logo.svg';


const NavBar = ({togglePopup,searchChange,onRoutechange}) => {

    return  (
       
        <header>
            <p className="logo" href="/"><img src={logo} alt="logo"/></p>
            <nav>
                <input type='search' placeholder='Type...' onChange= {searchChange}/>
            </nav>
            <div>
                <button className="cta" onClick={togglePopup.bind(this)}>New Audit</button> 
                <button className="cta" onClick={()=>onRoutechange('login')}>Sign Out</button>
            </div>
        </header>
        
    )
 }	

export default NavBar;
