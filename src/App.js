import NavBar from './components/layout/NavBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Constituency from './components/pages/Constituency';
import Missing from './components/pages/Missing';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useEfect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/constituency" element={<Constituency />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/*" element={<Missing />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
