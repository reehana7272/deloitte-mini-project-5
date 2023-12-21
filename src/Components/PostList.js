import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';
import './posts.css'
import deloitte from "./Image/deloitte.jpg"
function PostList(props) {
     //const [id,setId]=useState(0)
     var {id}=useParams();
     const [body,setBody]=useState(0)
     const url="https://jsonplaceholder.typicode.com/posts/"
     useEffect(() => {
        axios.get(`${url}/${id}`)
            .then((Response) => setBody(Response.data))
            .catch(() => { });
    }, []);

    return (
        <>
        <div class="container">
  <div class="card">
    <div class="card__header">
      <img src={deloitte} alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-blue">{body.title}</span>
      
      <p>{body.body}</p>
    </div>
   
  </div>
</div>
        </>
        
    );
}

export default PostList;