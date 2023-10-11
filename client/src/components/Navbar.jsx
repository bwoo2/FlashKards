import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className='nav_container'>
      <Link to="/" className='FlashIQ'>FlashKards</Link>
      <div className='nav_style'>
        <Link to="/" className='nav_button'>Home</Link>
        <Link to="/subjects" className='nav_button'>Subjects</Link>
        <input 
            type="search" 
            placeholder="Search topics, usernames,..." 
            className='search_bar'
        />
        <Link to='/Kards' className='nav_button_add'>+</Link>
        <Link to="/login" className='nav_button'>Log in</Link>
        <Link to="/signup" className='nav_button_sign_up'>Sign up</Link>
      </div>
    </div>
  );
}

export default Navbar;
