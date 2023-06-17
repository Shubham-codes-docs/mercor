import React from "react";
import Navbar from "./components/navbar/Index";
import Home from "./components/home/Index";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
