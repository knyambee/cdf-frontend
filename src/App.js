import NavBar from "./components/layout/NavBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Guide from "./components/pages/Guide";
import Apply from "./components/pages/Apply";
import Constituency from "./components/pages/Constituency";
import Missing from "./components/pages/Missing";
import { Route, Routes, useHistory } from "react-router-dom";
import { useEfect, useState } from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/constituency" element={<Constituency />}></Route>
        <Route path="Guide" element={<Guide />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Apply" element={<Apply />}></Route>
        <Route path="/*" element={<Missing />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
