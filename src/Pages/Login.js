import React from "react";
//import icon from './icon.jpg';
import '../Styles/Login.css';
//import Styles from "./Styles/Login.css";
const Login=()=>{
    return (
      <body>
        <div className="Loginbox">
          <h1>Login here</h1>
          <form>
            <p> Username</p>
            <input type="text" name="" placeholder="Enter Username"/>
            <p>Password</p>
            <input type="password" name="" placeholder="Enter Password"/>
            <input type="submit" name="" value="Log in"/>
            <a href="#">Forgot Password?</a><br/>
            <a href="#">Don't have an Account?</a>

    
          </form>
        </div>

      </body>
    

    );
};
export default Login;