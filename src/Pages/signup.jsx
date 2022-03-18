import React from "react";
const signup=()=>{
    return (
        <body>
        <div className="Signinbox">
          <h1>SignUp here</h1>
          <form>
            <p> Username</p>
            <input type="text" name="" placeholder="Enter Username"/>
            <p>Password</p>
            <input type="password" name="" placeholder="Enter Password"/>
            <p>Re-enter Password</p>
            <input type="password" name="" placeholder="Re-Enter Password"/>
            <input type="submit" name="" value="Register"/>
          </form>
        </div>

      </body>
    )
}