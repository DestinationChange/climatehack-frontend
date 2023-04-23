import { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";
import '../styles/design.css'

const API = process.env.REACT_APP_API_URL;

function Posts() {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/projectDescription`)
      .then((res) => {setPosts(res.data)})
      .catch((err) => console.log(err));
  }, []);
    return (
        <div className="posts">
        <ul className="postes" style={{ listStyle: "none" }}>
          {posts.map((post) => {
            return (
              <li style={{width: '300px', border: '1px black'}} key={post.id}>
                <Post post={post} />
              </li>
            );
          })}
        </ul>
      </div>
      );
}

export default Posts;