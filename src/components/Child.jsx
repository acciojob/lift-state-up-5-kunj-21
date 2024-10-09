import React, { useState } from "react";

const Child = ({ isLoggedIn, onLogin }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
  
    onLogin();
  };

  return (
    <div>
      
      {isLoggedIn ? (
        <h2>You are logged in!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  );
};

export default Child;
