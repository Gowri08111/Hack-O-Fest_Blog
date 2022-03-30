import React from "react";
import '../Styles/Login.css';
import { Link } from 'react-router-dom';
//import GoogleLogin from 'react-google-login';
const Login=()=>{
    return (
      <body>
        <div className="Loginbox">
          <h1>Login here</h1>
          <form>
            <p> Email</p>
            <input type="email" name="" placeholder="Enter Email"/>
            <p>Password</p>
            <input type="password" name="" placeholder="Enter Password"/>
            <input type="submit" name="" value="Log in"/>
            <a href="#">Forgot Password?</a><br/>
            <Link to="/signup">Don't Have an Account?</Link>
            
    
          </form>
        </div>

      </body>    
     

    );
};
export default Login;