import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  "../login.css"
function Login(props) {
    return (
        <div class="bg-primary">
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form>
                <h3>Login Here</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username" />

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" />

                <button>Log In</button>
               
            </form>
        </div>
    );
}

export default Login;