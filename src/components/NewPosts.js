import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function newPosts() {
  let navigate = useNavigate();

  const [newPosts, setNewPosts] = useState({
    user_id: 0,
    content: '',
    created_at: ''
  });

  const addPost = () => {
    axios
      .post(`${API}/projectDescription`, newPosts)
      .then(() => {navigate(`/projectDescription`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };


  const handleTextChange = (event) => {
    setNewPosts({ ...newPosts, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(newPosts);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Name:</label>
        <input
          id="name"
          value={newPosts.user_id}
          type="text"
          onChange={handleTextChange}
          placeholder="userName"
          required
        />
        <label htmlFor="content">Content:</label>
        <input
          id="content"
          type="text"
          required
          value={newPosts.content}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="created_at">Created_at:</label>
        <input
          id="created_at"
          type="text"
          name="category"
          value={newPosts.created_at}
          placeholder="04-22-2023"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewPosts;