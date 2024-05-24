// import { Link } from "react-router-dom"
// import "./login.css"
// export default function Login() {
//   return (
//     <div className="login">
//     <span className="loginTitle">LOGIN</span>
//       <form className="loginForm">
//       <label>Email: </label>
//         <input type="email" className="loginInput" placeholder="enter your email..."/>
//         <label>Password: </label>
//         <input type="password" className="loginInput" placeholder="enter your password..."/>
//         <button className="loginButton">Login</button>
//       </form>
//       <button className="loginRegisterButton">
//       <Link className="link" to="/register">Register</Link>
//       </button>
      
//     </div>
    
//   )
// }
import React from "react";
import LoginForm from "../loginform/LoginForm";
import './login.css'
import { Link } from 'react-router-dom';
function Login(){
    return(
        <>
        <LoginForm/>
        </>
    );
}

export default Login;