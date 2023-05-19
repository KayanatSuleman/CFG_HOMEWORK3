import React from 'react';

const Logout = ({ handleLogout }) => {
  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
