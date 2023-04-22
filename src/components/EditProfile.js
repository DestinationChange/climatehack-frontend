import React, { useState, useEffect } from 'react';

function EditProfile({ userId }) {
  const [userInfo, setUserInfo] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Call the API endpoint to retrieve the user information
    fetch(`/api/user/${userId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setUserInfo(data);
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setAddress(data.address);
      })
      .catch(error => console.error(error));
  }, [userId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Call the API endpoint to update the user information
    fetch(`/api/user/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setUserInfo(data);
        setIsSubmitting(false);
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('An error occurred while updating the profile.');
        setIsSubmitting(false);
      });
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  // Check whether the current user is authorized to edit the profile
  if (userInfo.id !== parseInt(localStorage.getItem('userId'))) {
    return <div>You are not authorized to edit this profile.</div>;
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={event => setPhone(event.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <textarea value={address} onChange={event => setAddress(event.target.value)} />
        </label>
        <br />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <button type="submit" disabled={isSubmitting}>Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfile