import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../components/UserProfile';

function User() {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile userId={userId} />
    </div>
  );
}

export default User;