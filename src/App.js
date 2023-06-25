import React from "react";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

const App = () => {
  return (
  <div>
    <div>
      <Navbar></Navbar>
    </div>
    <div>
      <Filter></Filter>
    </div>
    <div>
      <Cards></Cards>
    </div>
  </div>
  );
};

export default App;
