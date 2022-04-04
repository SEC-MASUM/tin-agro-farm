import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Reviews from "./components/Reviews/Reviews";
import useReviews from "./hooks/useReviews";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <Header show={show} />
      <Routes>
        <Route path="/" element={<Home setShow={setShow} />} />
        <Route path="/reviews" element={<Reviews setShow={setShow} />} />
        <Route path="/dashboard" element={<Dashboard setShow={setShow} />} />
        <Route path="/blogs" element={<Blogs setShow={setShow} />} />
        <Route path="/about" element={<About setShow={setShow} />} />
        <Route path="*" element={<NotFound setShow={setShow} />} />
      </Routes>
    </div>
  );
}

export default App;
