import React, { useState } from 'react';
import {useParams, useNavigate, useEffect} from 'react'
import axios from "axios"
const API = process.env.REACT_APP_API_URL;
//THIS NEEDS TO BE EDITED CORRECTLY
function Edit(props) {
    let { id } = useParams()
    let navigate = useNavigate()

    const[ posts, setPost ] = useState({
        title:" ",
        reigon:" ",
        type: " ",
        context: " "

    })

    const updatePost = (updatedPost) => {
        axios
          .put(`${API}/posts/${id}`, updatedPost)
          .then(
            () => {
              navigate(`/posts/${id}`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn('catch', c));
      };

    //   const handleTextChange = (event) => {
    //     setPost({ ...profile, [event.target.id]: event.target.value });
    //   };

    //   const handleCheckboxChange = () => {
    //     setPost({ ...profile,  });
    //   };
    
    //   useEffect(() => {
    //     axios.get(`${API}/posts/${id}`)
    //     .then(
    //       (response) => setProfile(response.data),
    //       (error) => navigate(`/not-found`)
    //     );
    //   }, [id, navigate]);

    return (
        <div>
            <form>
                <label>reigon</label>
                <input></input>
            </form>
            
        </div>
    );
}

export default Edit;