import React from 'react';
import UserProfile from '../components/UserProfile';
import '../styles/design.css'
function Profile(props) {
  const handleSubmit = (event) =>
    event.preventDefault()

    return (
        <div>
            <h1> Profile Page 🌍</h1>
            <div className='background'/>
            {/* <UserProfile userId={user_Id} /> */}
            <form onSubmit={handleSubmit}>
            
            </form>
        
        </div>
    );
}

export default Profile;