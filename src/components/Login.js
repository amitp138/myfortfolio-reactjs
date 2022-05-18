import React from "react";
import "./Login.css";

const Login = (props) => {
  
  
  return (
    <div>
      <div className="container">
        <div className="Login">
          
            <label htmlFor="email"></label>
            <input
            className="logininp"
              type="mail"
              placeholder="enter your email"
              name="email"
              value={props.email}
              onChange={props.handleEmail}
            />
            <label htmlFor="password"></label>
            <input
            className="logininp"
              type="password"
              name="password"
              placeholder="enter your password"
              value={props.password}
              onChange={props.handlePassword}
            />
            <button onClick={props.handleSubmit} type="submit">
              submit
            </button>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
