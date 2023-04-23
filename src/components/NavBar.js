import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/NavBar.css'
function NavBar() {
    return (
        <nav className='navbar' role='navigation bar'>
            <Link to="/"><button role='Home Section Button'>Home</button></Link>
            <Link to="/about"><button role='About Section Button'>About</button></Link>
            <Link to="/posts"><button role='posts Section Button'>Posts</button></Link>
            <Link to="/profile"><button role='User Section Button'>Profile</button></Link>
            <Link to='/prompts'><button>Prompts</button></Link>
        </nav>
    );
}

export default NavBar;