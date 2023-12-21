import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import './App.css';

function Posts(props) {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((Response) => setPosts(Response.data))
            .catch(() => { });
    }, []);

    return (
        <div>
            <h1 className='headr'>Blogs</h1>
            <br></br>
            {posts.map((object, index) => {
                return <div obj={object} key={index} className='PostList'>
                    <Link to={`/PostList/${object.id}`} >{object.title}</Link>
                </div>
            })}
        </div>
    );
}

export default Posts;