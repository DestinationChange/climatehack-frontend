import React from 'react';
import Posts from '../components/Posts'
import PostDetail from '../components/PostDetail'

function Card(props) {
    return (
        <div>
            <Posts />
            <PostDetail />
        </div>
    );
}

export default Card;