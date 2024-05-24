import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginForm.css';
import { useAuth } from '../../context/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LoginForm() {
  const { isloggedin, setislogedin } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if username, email, and password are valid
    if (username && email && password) {
      setislogedin(true);
      navigate("/", { replace: true });
     
    }
    toast.info("You have been logged in successfully!")
  };

  const handleLogout = () => {
    setislogedin(false);
    // Clear fields
    setUsername('');
    setEmail('');
    setPassword('');
    toast.info("You have been logged out successfully!")
  };
  
  return (
    <div className="login-container">
      {!isloggedin ? (
        <form className="abc login-form" onSubmit={handleLogin}>
          <h2>LOGIN</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username} 
              placeholder='Enter your username'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor='email'>Email:</label>
            <input 
              type='email'
              value={email}
              placeholder='Enter your email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder='Password'
              minLength="8"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      ) : (
        <div className="logout-container">
          <p>Welcome, You have been successfully logged in!!! {username}</p>
          <button onClick={handleLogout} className="login-button">Logout</button>
        </div>
        
      )}
    </div>
  );
}

export default LoginForm;
