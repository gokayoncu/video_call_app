import "./App.css";
import { Routes, Route } from "react-router-dom";
import VideoCall from "./Pages/VideoCall";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Room from "./Pages/VideoCall/Room";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/video/:id" element={<VideoCall />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
