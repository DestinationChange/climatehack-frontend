import React from 'react';
import { Link } from "react-router-dom";
import '../styles/design.css'
function Posts(post) {
    return (
        <div>
          <Link to={`/posts/${post.id}`}>
          <img src={post.image}></img>
          </Link>
          <div>
            <p>{post.user_id}</p>
            </div>
        </div>
      );
}

export default Posts;