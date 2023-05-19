import React, { useState } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import LoginUnsuccessful from './components/LoginUnsuccessful';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleBackToLogin = () => {
    // Redirect back to the login page
    window.location.href = '/';
  };

  return (
    <div>
      {isLoggedIn ? (
        <Logout handleLogout={handleLogout} />
      ) : (
        <>
          <Login handleLogin={handleLogin} />
          <LoginUnsuccessful handleBackToLogin={handleBackToLogin} />
        </>
      )}
    </div>
  );
};

export default App;
