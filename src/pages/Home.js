import React from 'react';
import '../styles/design.css'
import Posts from '../components/Posts';
function Home() {
    return (
        <div>
            <h1> Welcome to Destination Change🌍</h1>
            <div className='background'/>
            <div className='cards'>
                <Posts />
            </div>
        </div>
    );
}

export default Home;