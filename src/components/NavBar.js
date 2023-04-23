import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/NavBar.css'
function NavBar() {
    return (
        <nav className='navbar' role='navigation bar'>
            <Link to="/"><button role='Home Section Button'>Home</button></Link>
            <Link to="/about"><button>About</button></Link>
            <Link to="/posts"><button>Posts</button></Link>
            <Link to="/profile"><button>Profile</button></Link>
            <Link to= "/newPost"><button>New Post</button></Link>
            <Link to='/prompts'><button>Prompts</button></Link>
        </nav>
    );
}

export default NavBar;