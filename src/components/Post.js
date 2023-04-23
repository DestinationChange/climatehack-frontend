import React from 'react';

function AllPost({post}) {
    return (
        <div>
             <p>{post.user_id}</p>
             <img src={post.image} alt="post"></img>
             <p>Content: {post.content}</p>
             <p>Created_at: {post.created_at}</p>
          </div>
    );
}

export default AllPost;