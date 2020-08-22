import React from "react";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header class="header">
          <div class="header__title">
            <div class="header__title--main">Social Media Dashboard</div>
            <div class="header__title--submain">Total Followers: 23,004</div>
          </div>
           
           <Toggle />
        </header>
      </div>
    </div>
  );
}

export default App;
