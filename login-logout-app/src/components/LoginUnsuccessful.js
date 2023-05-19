import React from 'react';

const LoginUnsuccessful = ({ handleBackToLogin }) => {
  return (
    <div>
      <h1>Login Unsuccessful</h1>
      <p>Incorrect username or password.</p>
      <button onClick={handleBackToLogin}>Back to Login</button>
    </div>
  );
};

export default LoginUnsuccessful;