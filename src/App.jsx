import React from "react";
import Navbar from "./components/navbar/Index";
import Home from "./components/home/Index";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="App-Wrapper">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default App;
