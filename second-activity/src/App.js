import "./App.css";
import Navbar from "./components/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Counter from "./components/Counter.js";
import Contact from "./components/Contact.js";
import NotFound from "./components/NotFound.js";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
