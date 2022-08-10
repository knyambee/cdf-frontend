import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Guide from "./components/pages/Guide";
import Apply from "./components/pages/Apply";
import Constituency from "./components/pages/Constituency";
import Missing from "./components/pages/Missing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Constituency" element={<Constituency />}></Route>
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
