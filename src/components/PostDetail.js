import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate()

    const deletePost = () => {
        axios
          .delete(`${API}/projectDescription/${id}`)
          .then(
            () => {
              navigate(`/projectDescription`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };
    
      const handleDelete = () => {
        deletePost();
      };

    useEffect(() => {
        axios
        .get(`${API}/projectDescription/${id}`)
        .then((res) => {
            setPost(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [id]);
console.log(post)
    return (
        <div className="postSide">

        <div>

             <p>{post.user_id}</p>
             <img src={post.image} alt="post"></img>
             <p>Content: {post.content}</p>
             <p>Created_at: {post.created_at}</p>
             <div className="buttons">
            <>
              <Link to={`/posts`}>
                <button>Back</button>
              </Link>
            </>
            <>
              <Link to={`/posts/${post.id}/edit`}>
                <button>Edit</button>
              </Link>
            </>
            <>
              <button onClick={handleDelete}>Delete</button>
            </>
          </div>
          </div>
        </div>
    );
}

export default PostDetail;