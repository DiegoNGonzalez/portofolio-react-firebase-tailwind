import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {

  return <>
    <Navbar />
    <Home />
    <About />
    <Skills/>
  </>;
}

export default App;
