import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Menu from "./pages/menu/Menu";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
