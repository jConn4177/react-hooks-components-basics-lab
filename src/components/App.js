import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";

function App() {
  return (
    <div>
      {<Navbar />}
      {<Home />}
      {<About />}
    </div>
  );
}

export default App;
