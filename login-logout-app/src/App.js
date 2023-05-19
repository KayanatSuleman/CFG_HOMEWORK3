import logo from './logo.svg';
import './App.css';

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
