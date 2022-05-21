import React from "react";
import "./Login.css";
import { BiUserCircle,BiLock,BiLogIn } from "react-icons/bi";
const Login = (props) => {
  
  
  return (
    <div>
      <div className="container">
        
        <div className="Login">
          
        <h1>User Login</h1>
        <div className="input">
        <label htmlFor="username"> <BiUserCircle/></label>
            <input
            className="logininp"
              type="text"
              placeholder="enter your username"
              name="username"
              value={props.username}
              onChange={props.handleUsername}
            />
           </div>
           <div className="input">
             <label htmlFor="password"><BiLock/></label>
            <input
            className="logininp"
              type="password"
              name="password"
              placeholder="enter your password"
              value={props.password}
              onChange={props.handlePassword}
            />
            </div>
            <div className="submit">
            <label ><BiLogIn/></label>
            <button className="submitbtn" onClick={props.handleSubmit} type="submit">
              submit
            </button>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
