import React from "react";
import '../Styles/Signup.css'
const Signup=()=>{
    return (
        <body>
        <div className="Signinbox">
          <h1>SignUp here</h1>
          <form>
            <p> Email</p>
            <input type="email" name="" placeholder="Enter Email"/>
            <p>Password</p>
            <input type="password" name="" placeholder="Enter Password"/>
            <p>Confirm Password</p>
            <input type="password" name="" placeholder="Re-Enter Password"/>
            <input type="submit" name="" value="Register"/>
          </form>
        </div>

      </body>
    );  
};
export default Signup;