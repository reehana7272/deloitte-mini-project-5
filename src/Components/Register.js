import React from 'react';
import './App.css';
 
function Register(props) {
    return (
        <div>
        <div>
            <h1>Registration Form</h1>
            </div>
            <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="Name">Name </label>
                  <input className="form__input" type="text" id="Name" placeholder="Name"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div class="footer">
              <button type="submit" class="btn">Register</button>
            </div>
              </div>
        </div>
        </div>
    );
}
 
export default Register;