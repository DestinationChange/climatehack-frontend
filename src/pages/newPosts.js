import React from 'react';
import { Link } from 'react-router-dom';

function newPosts(props) {
    return (
        <div>
            <Link to="/newPosts">
                <button role='Home Section Button'>New Post</button>
            </Link>
    
        </div>
    );
}

export default newPosts;