import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { About } from './components/About'
import { Home } from './components/Home'
import { Navbar } from './components/Shared/Navbar'

function App() {
  return (
    <>
      
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      

    </>
  );
}

export default App;