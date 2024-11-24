import "./App.css";
import About from "./pages/about/About";

/////COMPONENTS
import Home from "./pages/home/Home";
import Navbar from "./components/nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
