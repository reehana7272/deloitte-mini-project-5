import React from 'react';
import deloitte from './Image/deloitte.jpg';
import { Link } from 'react-router-dom';
 
function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <a class="navbar-brand fw-bold" href="#">
                        <img src={deloitte} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
                            Deloitte
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                            <li class="nav-item">
                                <Link to="/Layout" class="navbar-brand">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Posts" class="navbar-brand">Blogs</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" class="navbar-brand">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Register" class="navbar-brand">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
 
        </div>
    );
}
 
export default Navbar;