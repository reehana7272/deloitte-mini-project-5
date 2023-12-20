import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'; 

import React from 'react';

function Navbar() {
  return (
    <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Deloitte Blogs</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                    <Link to="/" class="navbar-brand">Home</Link>
              </li>
              <li class="nav-item">
              <Link to="/Posts" class="navbar-brand">Posts</Link>
              </li>
              <li class="nav-item">
              <Link to="/Register" class="navbar-brand">Login</Link>
              </li>
              <li class="nav-item">
              <Link to="/Login" class="navbar-brand">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


