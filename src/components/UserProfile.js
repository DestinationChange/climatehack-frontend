import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [userInfo, setUserInfo] = useState(null);

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Call the API endpoint to retrieve the user information
    fetch(`${API}/users/${userId}`)
      .then(response => response.json())
      .then(data => setUserInfo(data))
      .catch(error => console.error(error));
  }, [userId]);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{userInfo.name}</h1>
      <p>{userInfo.email}</p>
      <p>{userInfo.phone}</p>
      <p>{userInfo.address}</p>
      {/* Display any additional information about the user */}
    </div>
  );
}

export default UserProfile;

//OTHER USERS SEE THIS