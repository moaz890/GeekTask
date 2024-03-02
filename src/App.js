import React from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Filter />
    </div>
  );
};

export default App;
