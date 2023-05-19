<<<<<<< HEAD
import React from 'react';

const Logout = ({ handleLogout }) => {
  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
=======
import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (username === 'said' && password === 'password') {
      handleLogin();
    } else {
      setIsLoginFailed(true); 
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {isLoginFailed && (
        <p style={{ color: 'red' }}>Login Unsuccessful</p>
      )} {"Login Unsuccessful"}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
>>>>>>> login-page
    </div>
  );
};

<<<<<<< HEAD
export default Logout;
=======
export default Login;
>>>>>>> login-page
