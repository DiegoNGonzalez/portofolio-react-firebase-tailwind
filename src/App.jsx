import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {

  return <>
    <Navbar />
    <Home />
    <About/>
  </>;
}

export default App;
