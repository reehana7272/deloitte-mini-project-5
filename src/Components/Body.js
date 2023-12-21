import React from 'react';
import blogs from './Image/blogs.jpg'
import "./App.css"
function Body(props) {
    return (
        <div>
          <img src={blogs} className="image" ></img>
        </div>
    );
}

export default Body;