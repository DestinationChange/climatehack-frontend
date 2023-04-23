import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams} from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

function UserProfile() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    region_id: '',
    about: ''
  });

  const navigate = useNavigate()
  const { id } = useParams()

  const deleteUser = () => {
    axios
      .delete(`${API}/users/${id}`)
      .then(() => {
        navigate(`/users`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = () => {
    deleteUser();
  };

  useEffect(() => {
    axios
    .get(`${API}/users/${id}`)
      .then(response => response.json())
      .then(data => setUserInfo(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!userInfo) {
    return <div>Loading...</div>;
  }
  console.log(userInfo)

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <p>{userInfo.name}</p>
      <p>{userInfo.email}</p>
      <p>{userInfo.region_id}</p>
      <p>{userInfo.about}</p>
      
      {/* Display any additional information about the user */}
     <> 
     <Link to={'/users'}>
        <button>Back</button>
      </Link>
     </>
     <> 
      <Link to={`/users/${id}/edit`}>
        <button>Edit</button>
      </Link>
      </>
      <>
      <button onClick={handleDelete}>Delete</button>
      </>
    </div>
  );
}

export default UserProfile;

//OTHER USERS SEE THIS