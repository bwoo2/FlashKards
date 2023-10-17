import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {

  const navigate = useNavigate(); 
  const handleSubjectsClick = () => {
    navigate('/subjects'); 
  };

  return (
    <div className='nav_container'>
      <Link to="/" className='FlashIQ'>FlashKards</Link>
      <div className='nav_style'>
        <Link to="/" className='nav_button'>Home</Link>
        <div className="dropdown_wrapper">
          <button 
            className='nav_button subjects_button' 
            onClick={handleSubjectsClick}
          >
            Subjects
          </button>
          <div className="dropdown_list">
            <Link to="/subjects/English" className='dropdown_item'>English</Link>
            <Link to="/subjects/History" className='dropdown_item'>History</Link>
            <Link to="/subjects/Math" className='dropdown_item'>Math</Link>
            <Link to="/subjects/Science" className='dropdown_item'>Science</Link>
          </div>
        </div>
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
