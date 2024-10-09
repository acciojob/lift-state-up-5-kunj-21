
import React from "react";
import './../styles/App.css';
import Parent from "./Parent";

const App = () => {
  return (
    <div>
      <h1>Parent Component</h1>
        {/* Do not remove the main div */}
        <Parent/>
    </div>
  )
}

export default App
