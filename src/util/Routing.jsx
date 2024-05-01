import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../component/Home"
import User from '../component/User';
import About from '../component/About';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Routing;
