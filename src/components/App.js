import React, { useState } from "react";
import Child from "./Child";

const App = () => {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  return (
    <div className="App">
      <h1>{isLoggedIn ? "Welcome, User!" : "Please Log In"}</h1>
     
      <Child isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
};

export default App;
